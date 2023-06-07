/* eslint-disable */
import styled from "styled-components";
import Box, { BoxProps } from "../../../components/layouts/Box";
import type { Responsive, CSSPropertyAlignItems, CSSPropertyAlignContent, CSSPropertyJustifyContent, CSSPropertyJustifyItems, CSSPropertyFlexDirection, CSSPropertyJustifySelf, CSSPropertyFlexWrap, CSSPropertyAlignSelf } from "@/types/styles";
import { toPropValue } from "../../../utils/styles";

type GridProps = BoxProps & {
  gridGap?: Responsive<string>;
  gridColumnGap?: Responsive<string>;
  gridRowGap?: Responsive<string>;
  gridColumn?: Responsive<string>;
  gridRow?: Responsive<string>;
  gridAutoFlow?: Responsive<string>;
  gridAutoColumns?: Responsive<string>;
  gridAutoRows?: Responsive<string>;
  gridTemplateColumns?: Responsive<string>;
  gridTemplateRows?: Responsive<string>;
  gridTemplateAreas?: Responsive<string>;
  gridArea?: Responsive<string>;
};

/**
 * こんな感じで使います。これで囲んだところがgirdコンテナになります。
 * <Grid gridTemplateColumns="180px 180px 180px">
 *  <ChildComponent />
 *  <ChildComponent />
 *  <ChildComponent />
 * </Grid>
 */
const Grid = styled(Box)<GridProps>`
  ${(props) => toPropValue('grid-gap', props.gridGap, props.theme)}
  ${(props) => toPropValue('grid-column-gap', props.gridColumnGap, props.theme)}
  ${(props) => toPropValue('grid-row-gap', props.gridRowGap, props.theme)}
  ${(props) => toPropValue('grid-row', props.gridRow, props.theme)}
  ${(props) => toPropValue('grid-column', props.gridColumn, props.theme)}
  ${(props) => toPropValue('grid-auto-flow', props.gridAutoFlow, props.theme)}
  ${(props) => toPropValue('grid-auto-columns', props.gridAutoColumns, props.theme)}
  ${(props) => toPropValue('grid-auto-rows', props.gridAutoRows, props.theme)}
  ${(props) => toPropValue('grid-template-columns', props.gridTemplateColumns, props.theme)}
  ${(props) => toPropValue('grid-template-rows', props.gridTemplateRows, props.theme)}
  ${(props) => toPropValue('grid-template-areas', props.gridTemplateAreas, props.theme)}
  ${(props) => toPropValue('grid-area', props.gridArea, props.theme)}
`

export default Grid