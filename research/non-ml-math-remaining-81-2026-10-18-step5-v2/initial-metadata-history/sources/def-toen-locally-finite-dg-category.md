---
id: def-toen-locally-finite-dg-category
kind: definition
title: "Locally finite dg enhancements for derived Hall theory"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-field-and-its-order
  - lem-field-is-a-commutative-ring
  - def-cochain-complex-in-an-abelian-category
  - def-differential-graded-algebra
  - def-differential-graded-module
  - def-model-category-and-quillen-adjunction
  - def-triangulated-category
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §§3–4"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: n/a
---

## Definition

Fix a finite field $k=\mathbb F_q$ ([[def-finite-field-and-its-order]]). Its field operations make it a commutative ring with unit by [[lem-field-is-a-commutative-ring]]; this is the base ring for all DGA and dg-module structures below. A **small $k$-linear dg-category** $\mathcal T$ has a set of objects, a cochain complex $\mathcal T(a,b)$ of $k$-vector spaces for every ordered pair, closed degree-zero identity maps, and associative degree-zero composition chain maps
$$ \mathcal T(b,c)\otimes_k\mathcal T(a,b)\longrightarrow\mathcal T(a,c). $$
The cohomological grading and differential follow [[def-cochain-complex-in-an-abelian-category]]. For cochain complexes U,V use the direct-sum total tensor complex
$$ (U\otimes_k V)^n=\bigoplus_{p+q=n}U^p\otimes_k V^q,\qquad d_{U\otimes V}(f\otimes g)=d_U f\otimes g+(-1)^p f\otimes d_Vg \quad(f\in U^p,\ g\in V^q). $$
The formula is k-balanced and additive because the two differentials are k-linear; extend it linearly from homogeneous tensors. It has degree $+1$ and squares to zero: on $f\otimes g$ its two mixed terms have coefficients $(-1)^{p+1}$ and $(-1)^p$, which cancel, and the remaining terms contain $d_U^2f$ or $d_V^2g$. Every element has finite support in the displayed direct sum, so this construction imposes no boundedness on U,V.

Writing $fg=f\circ g$ for $f\in\mathcal T(b,c)^p$ and $g\in\mathcal T(a,b)^q$, the requirement that composition commute with these differentials says exactly
$$ d(fg)=(df)g+(-1)^p f(dg). $$
Thus each endomorphism complex is a cohomological DGA in the sense of [[def-differential-graded-algebra]]: its multiplication is associative, unital and k-bilinear by the dg-category axioms, the scalar map is $\lambda\mapsto\lambda1_a$ and is central since $(\lambda1_a)f=\lambda f=f(\lambda1_a)$, and the displayed formula is precisely the DGA Leibniz rule. The identity has degree zero and is closed, as required above.

The dg-category is **locally finite** when, for every $a,b$, the graded vector space $\bigoplus_{i\in\mathbb Z}H^i(\mathcal T(a,b))$ is finite-dimensional. Thus the cohomology is finite-dimensional and vanishes outside a finite set of degrees; no uniform bound over all pairs is assumed.

A **right dg $\mathcal T$-module** is a dg-functor $\mathcal T^{op}\to\mathrm{Ch}(k)$: it assigns a cochain complex $M(a)$ to each object and compatible degree-zero right composition actions. Explicitly, the right action is a degree-zero chain map
$$ M(b)\otimes_k\mathcal T(a,b)\longrightarrow M(a),\qquad m\otimes f\longmapsto mf, $$
with the tensor differential just fixed. For homogeneous $m\in M(b)^q$ and $f\in\mathcal T(a,b)^p$, its chain-map identity is
$$ d_M(mf)=d_M(m)f+(-1)^q m\,d_{\mathcal T}(f). $$
The actions are unital and compatible with composition. In particular, on each endomorphism algebra $\mathcal T(a,a)$ they give exactly the right differential graded module structure of [[def-differential-graded-module]], with the sign determined by the degree of m, not of f. No left action or ungraded identification with a left module is inferred. For $h_b=\mathcal T(-,b)$ the action is composition, so the composition identity above verifies this same right-module differential rule. A quasi-isomorphism is a module map inducing an isomorphism on every cohomology group at every object.

The enhancement used here includes the standard projective model category of right dg modules ([[def-model-category-and-quillen-adjunction]]): its weak equivalences are the quasi-isomorphisms just defined, its fibrations are objectwise degreewise surjections, and its representable modules are homotopically projective, so their dg Hom complexes compute derived Hom. Its homotopy category $\mathcal D(\mathcal T)$ is triangulated. The same objectwise homotopy theory is used for arrow diagrams and composable-pair diagrams. It is stable: it is pointed, and a square is a homotopy pushout exactly when it is a homotopy pullback. The translation is the cohomological shift, and a homotopy cofiber of a module map is represented functorially by its mapping cone. These homotopy-theory structures are part of the supplied dg enhancement; an unenhanced triangulated category alone is not an input.

For modules $a,b$, write $\mathrm{RHom}_{\mathcal T}(a,b)$ for the derived Hom complex in the supplied projective homotopy theory. Its derived mapping space has $\pi_j\operatorname{Map}(a,b)=H^{-j}\mathrm{RHom}_{\mathcal T}(a,b)=\operatorname{Ext}^{-j}_{\mathcal T}(a,b)$ for $j\ge0$. In the core homotopy type of a category of modules, $\pi_1$ at $a$ is $\operatorname{Aut}(a)$ and $\pi_i=\operatorname{Ext}^{1-i}_{\mathcal T}(a,a)$ for $i>1$.

For $a\in\mathcal T$, the **representable right module** is $h_a=\mathcal T(-,a)$. A module is **perfect** if its object in $\mathcal D(\mathcal T)$ belongs to the smallest full triangulated subcategory containing all representables and closed under retracts. This means it is obtained from finitely many representables by finite direct sums, shifts, cones, and direct summands. For perfect modules set
$$ \operatorname{Ext}^i_{\mathcal T}(x,y):=\operatorname{Hom}_{\mathcal D(\mathcal T)}(x,y[i]). $$
