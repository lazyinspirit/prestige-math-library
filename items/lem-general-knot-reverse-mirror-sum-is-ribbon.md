---
id: lem-general-knot-reverse-mirror-sum-is-ribbon
kind: lemma
title: "A knot summed with its reverse mirror bounds a ribbon disk"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reverse-mirror-of-oriented-knot
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-morse-function-and-excellent-morse-function
  - def-nondegenerate-critical-point-nullity-index-and-coindex
  - def-countable-choice
  - thm-isotopy-extension
  - thm-parametric-transversality
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.1, Proposition 1.6 and Exercise △6, printed pp.4–5 and 23"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.3 and the inverse construction, printed pp.322–323"
---

## Statement

Assume the Axiom of Countable Choice. For every smooth oriented knot $K\subset S^3$, let $B^4=\{x\in\mathbb R^4:\lVert x\rVert^2\le1\}$ with boundary $S^3$. The oriented connected sum $K\#K^\dagger$ bounds a smooth properly embedded disk $D\subset B^4$ for which the squared radial function $\rho(x)=\lVert x\rVert^2$ restricts to a Morse function on the interior of $D$ with all critical points of index $0$ or $1$.

## Statement references

[[def-reverse-mirror-of-oriented-knot|The reverse-mirror knot]]

[[def-knot-connected-sum-and-prime-knot|The fixed oriented connected-sum convention]]

[[def-locally-flat-proper-surface-and-concordance-collars|Proper surface embeddings]]

[[def-morse-function-and-excellent-morse-function|Morse functions]]

[[def-nondegenerate-critical-point-nullity-index-and-coindex|Nondegenerate critical points and Morse index]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth oriented knot $K\subset S^3$.

[F1] A knot is a smooth embedding of an oriented circle in the standard oriented $S^3$; a small ball meeting it in a short trivial arc leaves a properly embedded smooth arc in the complementary ball. ([[def-oriented-link-in-s-three-and-ambient-isotopy]])

[F2] The connected sum uses the fixed reflection and orientation-reversing boundary gluing, and changing the local trivial arcs and ball charts does not change its oriented knot type under $\mathrm{AC}_\omega$. ([[def-knot-connected-sum-and-prime-knot]], [[lem-knot-connected-sum-well-defined]])

[F3] If a smooth family of maps is transverse as a total map to $\{0\}\subset\mathbb R$, then outside a null set of parameters its slice is transverse to $0$. ([[thm-parametric-transversality]])

[F4] Under $\mathrm{AC}_\omega$, an isotopy of embeddings of a compact source with boundary into the boundaryless manifold $S^3$ extends to an ambient isotopy supported in any prescribed neighborhood of its track. ([[thm-isotopy-extension]])

[F5] The reverse mirror is obtained by applying the fixed orientation-reversing reflection and reversing the knot orientation. ([[def-reverse-mirror-of-oriented-knot]])

[F6] A proper surface embedding has boundary preimage equal to its surface boundary; smooth surface charts give the required boundary behavior in the unit four-ball. ([[def-locally-flat-proper-surface-and-concordance-collars]])

[F7] A Morse function has nondegenerate critical points, and the index is the maximal dimension of a subspace on which its Hessian is negative definite. ([[def-morse-function-and-excellent-morse-function]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]])

[A1] The Axiom of Countable Choice is the sequence-choice principle stated in the extension and transversality suppliers. ([[def-countable-choice]])

## Proof

**Given:** $\mathrm{AC}_\omega$ and $K$.

1.1 Cut a short trivial arc from $K$ inside a small ball. Identify its complementary ball with the unit ball $B^3\subset\mathbb R^3$ so that the remaining arc is a smooth embedding $a:[0,1]\to B^3$, its endpoints lie on $S^2$, and its interior lies in the open ball. Straighten its endpoint collars to be radial and transverse to $S^2$. A small perturbation supported away from the endpoints makes $a$ avoid the origin; compactness and the fact that a one-dimensional embedded arc has empty interior allow the perturbation to be chosen arbitrarily small in $C^1$, so it remains embedded and fixed on the endpoint collars. Put $f(s)=\lVert a(s)\rVert^2$. Then $f>0$ on $[0,1]$, $f(0)=f(1)=1$, $f<1$ on $(0,1)$, and transversality gives $f'(0)<0<f'(1)$. [F1, F2, A1, construct]

2.1 The zeros of $f'$ lie in a compact subinterval of $(0,1)$ because $f'$ is nonzero on the endpoint collars. Cover the zero set by finitely many intervals carrying smooth functions $\phi_i$ supported in $(0,1)$ whose derivatives equal $1$ on smaller intervals still covering the zero set. For $u=(u_i)$ define $f_u=f+\sum_i u_i\phi_i$. On a neighborhood of every zero of $f'$ the total family $\mathcal F(s,u)=f'_u(s)$ is a submersion in the parameter direction, since some $\partial\mathcal F/\partial u_i=\phi_i'(s)=1$. On the compact complement of that neighborhood, $|f'|$ has a positive lower bound, so for all sufficiently small $u$ no new zeros occur there. Thus the total map is transverse to $0$ for parameters in a sufficiently small ball. By [F3], choose a parameter in that ball for which $0$ is a regular value of $f'_u$. The critical points of $f_u$ are then nondegenerate and finite. Shrink the parameter ball so $0<f_u<1$ on the perturbation support. The radial arcs $a_\lambda(s)=\sqrt{f_{\lambda u}(s)/f(s)}\,a(s)$, $0\le\lambda\le1$, form a smooth isotopy of embeddings fixed near the endpoints: the formula is smooth since $f>0$, and sufficiently small $C^1$ perturbations preserve immersion and injectivity on the compact source. By [F4], extend this isotopy in an ambient isotopy supported away from the removed trivial arc, so replacing $a$ by $a_u$ preserves the knot type of its closure. Rename $a_u$ as $a$ and $f_u$ as $f$. [F3, F4, A1, step 1.1, construct, choose]

3.1 In the unit ball $B^4=\{(x,t)\in\mathbb R^3\times\mathbb R:\lVert x\rVert^2+t^2\le1\}$ define $\Omega=\{(s,t):0\le s\le1,\ t^2\le1-f(s)\}$ and $D=\{(a(s),t):(s,t)\in\Omega\}$. The map $(s,t)\mapsto(a(s),t)$ is an injective immersion, hence an embedding because $\Omega$ is compact. The function $q(s)=(1-f(s))/(s(1-s))$ extends smoothly and positively to $s=0,1$, with $q(0)=-f'(0)>0$ and $q(1)=f'(1)>0$. Consequently $(s,v)\mapsto(s,v\sqrt{q(s)})$ is a smooth diffeomorphism from the round disk $v^2\le s(1-s)$ onto $\Omega$. The boundary of $\Omega$ is regular: at an interior boundary point $t\ne0$, and at its two endpoints $f'(s)\ne0$, so the differential of $f(s)+t^2$ is nonzero. Thus $D$ is a smooth disk, its boundary lies in $S^3$, and its interior lies in the open four-ball. By [F6], its boundary is exactly the boundary knot specified by properness. [F6, step 1.1, step 2.1, construct]

4.1 The two boundary arcs of $D$ are the lifts $(a(s),\pm\sqrt{1-f(s)})$ and meet the equatorial $S^2=\{t=0\}\cap S^3$ only at their endpoints. Each hemisphere of $S^3$ is a standard three-ball. Away from a small collar of its equator, projection $(x,t)\mapsto x$ is a smooth diffeomorphism onto the corresponding truncated ball and identifies the lifted arc with $a$. At an endpoint, use the equator collar coordinate $t\ge0$ (or $-t\ge0$ in the lower hemisphere). Since $f'(0)\ne0$ and $f'(1)\ne0$, the implicit function theorem writes the lifted arc near each endpoint as $s=\sigma(t^2)$, with $\sigma$ smooth; in a chart $y$ on the equator its tangential coordinates are $y(t)=y_0+O(t^2)$, while $t$ is the inward collar coordinate. Choose a cutoff $\chi(y,t)$ supported in this chart and equal to $1$ near the arc, and use $(y,t)\mapsto(y-\chi(y,t)(y(t)-y_0),t)$. Its derivative is the identity plus $O(t)$, so after shrinking the collar it is a diffeomorphism and straightens the arc to $\{y_0\}\times[0,\epsilon)$. This is the same standard ball-arc collar as the radial endpoint collar of $a$. Thus the lifted upper arc is the original ball-arc tangle and the lower one is its image under $(x,t)\mapsto(x,-t)$, up to collar-supported isotopy. The boundary orientation traverses one lifted arc in the direction of $a$ and the other in the reverse direction. By [F2] and [F5], closing these two arcs with the fixed connected-sum gluing gives precisely the oriented type $K\#K^\dagger$. Therefore $\partial D$ has the required oriented knot type. [F2, F5, step 3.1, construct]

5.1 On $D$, the squared radial function is $\rho(s,t)=f(s)+t^2$. Its interior critical points are exactly $(s,0)$ where $f'(s)=0$. At each such point the Hessian is $\operatorname{diag}(f''(s),2)$, which is nondegenerate and has index $0$ when $f''(s)>0$ and index $1$ when $f''(s)<0$ by [F7]. Thus there are no index-$2$ critical points, and step 4.1 identifies the boundary knot as $K\#K^\dagger$. This proves the statement. [F7, step 2.1, step 3.1, step 4.1, algebra] ∎

## Diagram

The picture is a schematic of the parameter domain $\Omega$ in step 3.1. The horizontal coordinate is $s$, the vertical coordinate is $t$, and the two boundary arcs meet at $(0,0)$ and $(1,0)$. The marked point represents one possible interior critical point $(s_j,0)$; its presence and index are determined by the proof's Morse perturbation and Hessian calculation. The diagram contains no knot-crossing information and is not used in the proof.

```tikz
\begin{tikzpicture}[scale=1.05]
  \draw[->] (-0.15,0)--(4.25,0) node[right] {$s$};
  \draw[->] (0,-1.45)--(0,1.45) node[above] {$t$};
  \draw[thick] (0,0) .. controls (0.75,1.22) and (1.25,0.8) .. (2.0,0.78)
                    .. controls (2.75,0.8) and (3.25,1.22) .. (4.0,0);
  \draw[thick] (0,0) .. controls (0.75,-1.22) and (1.25,-0.8) .. (2.0,-0.78)
                    .. controls (2.75,-0.8) and (3.25,-1.22) .. (4.0,0);
  \draw[dashed] (2,0)--(2,0.78);
  \fill (2,0) circle (2pt);
  \fill (0,0) circle (2pt);
  \fill (4,0) circle (2pt);
  \node[below left] at (0,0) {$(0,0)$};
  \node[below right] at (4,0) {$(1,0)$};
  \node[below] at (2,0) {$(s_j,0)$};
  \node[right] at (2,0.45) {$t^2=1-f(s)$};
\end{tikzpicture}
```

## Sources

[[thm-parametric-transversality]]

[[thm-isotopy-extension]]

[[lem-knot-connected-sum-well-defined]]
