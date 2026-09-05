# Final-adjudicator evidence: `thm-inhomogeneous-linear-transport-formula`

Disposition: `repaired`.

I independently reviewed the theorem and all direct dependencies, the PDE A/B
pages, batch-7 manifest and coverage notes, Step-6 reader/refuter evidence, the
critical-risk contract record, both judge rejections, both Alpha
adjudications, the round-2 repair, and both proof-contract copies.

The Alpha repairs correctly added `a in C1`, continuity of `c,f`, a unique
in-domain flow, a separate `t=0` branch, oriented integrals, and a chain-rule
converse.  The final converse still referred to “the scalar ODE from step 1.1,”
although step 1.1 derived that ODE under the forward assumption that `u`
already solves the PDE.  That cross-reference left the same directionality
ambiguity as the first rejection.  It also did not explicitly recover the
initial condition.  The batch manifest omitted the chain-rule dependency and
the converse mechanism, while the contract marked both logical directions and
the zero branch not applicable.

I repaired the converse independently.  For a fixed characteristic
`Y(s)=X(s;t,x)`, flow consistency rewrites every occurrence
`X(r;s,Y(s))` in the displayed formula as `Y(r)`.  Thus the restriction
`v(s)=u(Y(s),s)` is literally the published integrating-factor formula with
continuous coefficients `p=c o Y` and `q=f o Y`; the scalar ODE theorem itself
then gives `v'+pv=q`.  The chain rule and `Y'=a(Y,s)` recover
`u_t+a dot grad u+c u=f`.  At `t=0`, the identity characteristic endpoint and
the zero oriented integral give `u(x,0)=u_0(x)`.  No one-way PDE-to-ODE lemma is
used in reverse.

I expanded the Given data, added the characteristic-definition fact,
synchronized the batch strategy/dependencies, regenerated the batch and merged
contract entries, marked the zero/forward/reverse rows `checked`, and updated
the critical-risk note.  No dependency item was edited, so no
`owner-prerequisite-repair` licence is required.

Authoritative source verification:

- https://www.math.toronto.edu/ivrii/PDE-textbook/Chapter2/S2.1.html — Victor
  Ivrii's University of Toronto PDE text derives first-order PDE solutions by
  solving along integral curves; its “Right-hand expression” and “Linear and
  semilinear equations” sections reduce the inhomogeneous linear PDE to a
  scalar linear ODE along those curves, while its initial-boundary discussion
  records the domain restriction when a traced characteristic does not reach
  available data.  This supports the final formula, directionality, and
  in-domain hypotheses.

Focused precheck, render, strict batch and merged proof-contract, citation
fidelity, boundary, risk, content-policy, dependency, and whitespace checks
passed on the final bytes before recording.
