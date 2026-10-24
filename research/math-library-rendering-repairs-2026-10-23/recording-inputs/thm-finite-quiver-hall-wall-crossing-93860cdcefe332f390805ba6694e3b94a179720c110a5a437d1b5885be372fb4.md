---
id: thm-finite-quiver-hall-wall-crossing
kind: theorem
title: "Completed Hall wall crossing for finite acyclic quivers"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - thm-finite-quiver-euler-and-skew-integration-is-multiplicative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §§4.4–4.6"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli, §§2 and 4"
      url: "https://arxiv.org/pdf/math/0204059"
verification:
  precheck: pass
---

## Statement

Let $Q$ be any finite acyclic quiver over $\mathbb F_q$, including wild
quivers, and let $Z_-$ and $Z_+$ be any two assignments of upper-half-plane
charges $z_i\in\mathbb H$. In the dimension completion of the subobject-first
Hall algebra,
$$A_{\mathrm{all}}=\prod_{\phi\in\Phi_Z\ \mathrm{decreasing}}S_Z(\phi),\qquad \Phi_Z=\{\phi_Z(\mathbf e):0\ne\mathbf e\in\mathbb N^{Q_0}\}.$$
The product is degreewise finite and includes all semistable objects, whether
stable or strictly semistable. Applying either Euler integration $I$ or skew
integration $J$ gives equal completed ordered products for $Z_-$ and $Z_+$.
Each integrated ordered product has constant term $1$ and is a unit in its
completed quantum torus; conjugation by the two equal products therefore gives
the same continuous automorphism.
No generic-stability, finite-type, 3-Calabi–Yau, orientation-data, or analytic
convergence assumption is used.

## Facts & Assumptions

**Given:** A finite acyclic quiver over $\mathbb F_q$ and two collections of
charges $Z_-,Z_+$ with each vertex charge in $\mathbb H$.

[F1] $A_{\mathrm{all}}$ and $S_Z(\phi)$ are the degree-completed sums of all
objects and of semistable objects at phase $\phi$; the product is
subobject-first ([[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]]).

[F2] Every representation has a unique HN filtration with nonzero semistable
factors of strictly decreasing phase
([[lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend]]).

[F3] Both $I$ and $J$ are continuous unital homomorphisms on the completed
Hall algebra ([[thm-finite-quiver-euler-and-skew-integration-is-multiplicative]]).

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix distinct phases $\phi_1>\cdots>\phi_r$. Iterating the defining formula $(f\star g)(M)=\sum_{U\subseteq M}f(U)g(M/U)$ from [F1], with left-associated products, shows that the coefficient of $\delta_M$ in $S_Z(\phi_1)\star\cdots\star S_Z(\phi_r)$ is the number of weak flags $$0=M_0\subseteq M_1\subseteq\cdots\subseteq M_r=M$$ for which every nonzero factor $M_j/M_{j-1}$ is semistable of phase $\phi_j$. The induction step chooses $M_{r-1}\subseteq M$ in the last binary product and then uses the previous flag inside $M_{r-1}$; zero quotients exactly represent skipped phases. [F1, construct, algebra]

1.2 For a fixed dimension vector $\mathbf d$, any contributing nonzero factor has dimension vector $\mathbf e$ with $0<\mathbf e\le\mathbf d$. There are finitely many such vectors and therefore finitely many possible phases. A contributing flag has at most $|\mathbf d|$ nonzero factors. Thus the ordered product over all phases is a finite computation in each degree and defines an element of $\widehat H_Q$. [F1, algebra]

2.1 By [F2], for every $M$ exactly one flag counted by the preceding flag-count argument has strictly decreasing semistable factors: its unique HN filtration. Therefore the coefficient of each $\delta_M$ in the ordered product is $1$, which is the coefficient of $\delta_M$ in $A_{\mathrm{all}}$. The zero object contributes the common degree-zero unit. This proves the Hall identity. [F1, F2, step 1.1, step 1.2]

3.1 Apply $I$ and $J$ from [F3] to the degreewise truncations of the identity in step 2.1. Their continuity shows that the limits preserve the identity, giving both equalities of completed Euler and skew ordered products for $Z_-$ and $Z_+$. [F3, step 2.1, algebra]

4.1 Write each integrated phase factor as $1+g_\phi$, where every term of $g_\phi$ has positive total dimension. Then $(1+g_\phi)^{-1}=1-g_\phi+g_\phi^2-\cdots$, since for any fixed degree only finitely many powers contribute. By step 1.2 only finitely many phases affect a fixed degree, so the ordered product $P_Z$ and the reverse-ordered product of these inverses both converge degreewise. Their finite truncations are mutual inverses, and continuity of multiplication gives $P_ZP_Z^{-1}=P_Z^{-1}P_Z=1$. Thus $a\mapsto P_ZaP_Z^{-1}$ is a continuous automorphism with inverse $a\mapsto P_Z^{-1}aP_Z$. Step 3.1 gives the same $P_Z$ for $Z_-$ and $Z_+$, so these conjugations agree. All limits are formal in the degree completion. [F1, F3, step 1.2, step 3.1, algebra] ∎


## Remarks

For either choice $F=I$ or $F=J$ separately, put
$H_\pm=\prod_{\phi\in\Phi_{Z_\pm}\ \mathrm{decreasing}}S_{Z_\pm}(\phi)$
and $P_\pm=F(H_\pm)$ in the corresponding completed torus. The diagram
compares the two phase orderings; its horizontal equalities are equalities
of elements, and its vertical arrows apply the same integration map $F$.

```tikz
\begin{tikzpicture}
\path[use as bounding box] (-0.8,-0.5) rectangle (5.8,2.5);
\node (hm) at (0,2) {$H_-$};
\node (hp) at (5,2) {$H_+$};
\node at (2.5,2) {$=A_{\mathrm{all}}=$};
\node (pm) at (0,0) {$P_-$};
\node (pp) at (5,0) {$P_+$};
\node at (2.5,0) {$=F(A_{\mathrm{all}})=$};
\draw[->] (hm) -- node[left] {$F$} (pm);
\draw[->] (hp) -- node[right] {$F$} (pp);
\end{tikzpicture}
```

The common unit $P=P_-=P_+$ therefore gives the same continuous
conjugation $a\mapsto PaP^{-1}$. All products retain the subobject-first,
decreasing-phase convention and are interpreted degreewise; no numerical
phase rays or path between $Z_-$ and $Z_+$ is specified. Steps 1.1–4.1 prove
these assertions independently of the illustration.
