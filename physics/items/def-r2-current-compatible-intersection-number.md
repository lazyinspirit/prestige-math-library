---
id: def-r2-current-compatible-intersection-number
kind: definition
title: "Current-compatible signed intersection number"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - def-oriented-smooth-manifold-and-oriented-chart
  - lem-r2-transverse-complementary-cycles-have-finite-intersection
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  lem-r2-transverse-complementary-cycles-have-finite-intersection: mathematical-premise
justified_by:
  - lem-r2-current-intersection-number-is-well-defined
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  scraped: []
  references:
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology, Definition 4.3.1 and §7.2.3"
      url: "https://umutvg.github.io/difftop.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
---

## Definition

Let $X$ be an oriented smooth $n$-manifold and let $C,D\subseteq X$ be compact oriented embedded smooth submanifolds without boundary, with dimensions $p$ and $q=n-p$. Assume $T_xC+T_xD=T_xX$ at every $x\in C\cap D$. For such $x$, the addition map $A_x:T_xC\oplus T_xD\to T_xX$, $(u,v)\mapsto u+v$, is an isomorphism. Use the determinant-line isomorphism $\det(T_xC\oplus T_xD)\cong\det(T_xC)\otimes\det(T_xD)$ in C-first order and let $\Lambda_x:\det(T_xC)\otimes\det(T_xD)\to\det(T_xX)$ be the map induced by $A_x$. Write $\mathfrak o_{C,x}\subset\det(T_xC)$, $\mathfrak o_{D,x}\subset\det(T_xD)$, and $\mathfrak o_{X,x}\subset\det(T_xX)$ for the orientation rays at $x$. For a zero-dimensional factor $M$, identify $\det(T_xM)=\mathbb R$ using its canonical generator $1$ and take $\mathfrak o_{M,x}=\mathbb R_{>0}$ when its supplied point sign is $+1$ and $\mathfrak o_{M,x}=\mathbb R_{<0}$ when the sign is $-1$. Set $\sigma_x(C,D)=+1$ if $\Lambda_x(\mathfrak o_{C,x}\otimes\mathfrak o_{D,x})=\mathfrak o_{X,x}$, and set $\sigma_x(C,D)=-1$ if the image is the opposite ray. When $p,q>0$, this agrees with the sign obtained by concatenating positive tangent bases; the zero-dimensional ray uses the supplied point orientation, which is not determined by the empty frame alone. Define the current-compatible intersection number by
$$C\mathbin{\cdot_{\mathrm{cur}}}D:=(-1)^{pq}\sum_{x\in C\cap D}\sigma_x(C,D).$$
The sum is finite by the preceding lemma. This convention reverses the usual C-first orientation order when $pq$ is odd; equivalently it is the D-first signed intersection number.

## Definition references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[lem-r2-transverse-complementary-cycles-have-finite-intersection]]

## Remarks

The orientation supplier defines each orientation as a smooth choice of a ray in the determinant line of the corresponding tangent space; for positive-dimensional tangent spaces, a basis is positive exactly when its wedge lies in that ray. In the determinant-line definition above, exchanging the $p$- and $q$-dimensional factors changes the induced determinant map by $(-1)^{pq}$, so $\sigma_x(D,C)=(-1)^{pq}\sigma_x(C,D)$ in all dimensions, including zero-dimensional factors. Thus the displayed convention is exactly the D-first signed sum. The determinant-line sign is uniquely defined without choosing bases, and the next lemma proves finite-sum well-definedness. For a wrapped source three-cycle and a complementary test three-cycle, $pq=9$, so this current convention is the negative of the convention that orders the source tangent basis before the test tangent basis. The pairing lemma below carries this sign explicitly.

