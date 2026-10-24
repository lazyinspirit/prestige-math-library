# Lane 07: three-strand geometric braid relation

**Decision:** A diagram is useful for this explicit construction. Its purpose is to make the stacking order, adjacent crossings, and common endpoint permutation easy to read; missing art by itself is not a mathematical defect.

## Checked conventions

The source fixes right-factor-below stacking. Read bottom-to-top, the words are

- `W0`: `σ1`, `σ2`, `σ1`;
- `W1`: `σ2`, `σ1`, `σ2`.

At the successive stages these exchange positions `(1 2),(2 3),(1 2)` and `(2 3),(1 2),(2 3)`, respectively. Both have endpoint tuple `(q3,q2,q1)`, hence endpoint permutation `(1 3)` with the source's definition `u_k(1)=q_{π(k)}` and composition `(π∘σ)(j)=π(σ(j))`. The middle strand returns to `q2`.

The rotation `rot` takes `Q` to `(q3,q2,q1)` by rotating all three points through angle `π`; the distances between points are preserved, and all points remain in the disk. It is a useful geometric companion panel to the two words.

## Scope of what a diagram can show

The displayed linear interpolation `Z(s,u)` has fixed bottom and top tuples, and the source verifies its sample slices at `u=0,1/2,1`. Those checks alone do not establish collision-freeness for every `(s,u)`. The isotopy conclusion is supported by cited Fact `[F1]`, which invokes the geometric braid-relation lemma's isotopies. A diagram should illustrate the braid and crossing order, not stand in for that global proof.

The cited half-twist path determines the geometry. Since the source does not state a separate over/under projection convention here, any drawing should follow the cited definition and avoid adding an unsupported crossing convention.

## Screenshot review

Viewed all four listed local PNGs at original resolution. They show the example, its facts and assumptions, verification, conclusion, and remarks legibly; no rendering issue affects this review.
