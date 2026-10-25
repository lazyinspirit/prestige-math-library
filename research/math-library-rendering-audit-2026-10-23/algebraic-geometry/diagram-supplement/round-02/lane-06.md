# Round 02 diagram supplement lane 06

## Scope and evidence

Reviewed only `lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point`. The assignment-bound snapshot SHA256 is `ee474f24bf713dc2d67fc862c7c48c3192f885d2ef8c10895c165fdbd6f9a9c6`, matching the assignment. Inspected all three listed local PNG tiles at original resolution:

- `screenshots/lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point--01.png` — SHA256 `b772dc8d7d2d4e1fd7a5bb04e3b461f55ff03866520f56af3c95b742dff3cb63`.
- `screenshots/lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point--02.png` — SHA256 `78bc6af34b4d4d072990ae2b2940e72cfaa69ab3807b21799fcae674b6611663`.
- `screenshots/lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point--03.png` — SHA256 `2391da8e6da595a3b54073def05cb74b8a412fcd4484e34c32c4762da1af0286`.

Together the tiles show the statement, assumptions, all proof steps, and remarks. There is no displayed diagram; the local render receipt reports `katex_errors=[]`, `tikz_count=0`, and `diagram_failures=[]`.

## Finding

An optional factorization diagram is recommended. Draw `X --g--> Bl_y Y --b--> Y`, with the given `f:X→Y` as the composite `b∘g=f`. Mark the center `y∈Y` and exceptional divisor `E'=b^{-1}(y)`. Annotate that the pulled-back center ideal `I_y O_X` is invertible, so the blowup universal property gives the unique lift `g` over `Y`.

The directions and types agree: `f` maps `X` to `Y`; the blowup map `b` maps `Bl_yY` to `Y`; and the lift maps `X` to `Bl_yY`, so `b∘g` has source `X` and target `Y`. The stated invertibility is the blowup criterion used in Fact [F8], and the lift is unique. No indexing or sign issue arises. The diagram would clarify the final construction; its absence does not establish a mathematical inconsistency.
