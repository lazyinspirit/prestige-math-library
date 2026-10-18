---
id: lem-pa36-flag-tdo-pbw-and-twist
kind: lemma
title: PBW and integral line-bundle twisting for flag TDOs
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-g-linearization-of-an-invertible-sheaf
  - def-invertible-sheaf
  - def-pa36-flag-tdo-and-module
  - def-sheaf-tensor-product
  - lem-semisimple-flag-torsor-zariski-charts
  - thm-semisimple-flag-variety-smooth-projective
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§§4.6–4.16 and 6.1, printed pp. 82–92"
    - title: "Yi Sun, D-modules and representation theory"
      url: "https://yisun.io/notes/dmod.pdf"
      locator: "§§4.1–4.3, printed pp. 30–33; filtered action-algebroid quotient and integral twist"
---

## Statement

Use $X$, $\mathfrak g$, $\mathfrak b_X$, and $\mathcal D_\kappa$ from
[[def-pa36-flag-tdo-and-module]]. For every $\kappa\in\mathfrak h^*$ the
isotropy relations generate a two-sided ideal and define a TDO satisfying
$$F_0\mathcal D_\kappa=\mathcal O_X,\qquad \operatorname{gr}\mathcal D_\kappa\cong\operatorname{Sym}_{\mathcal O_X}T_X.$$
If $\eta\in X^*(T)$ is integral, then
$$\mathcal D_\kappa\cong\operatorname{Diff}\bigl(\mathcal O_X(\kappa+\rho)\bigr) \quad(\kappa+\rho\text{ integral}),\qquad \mathcal D_{-\rho}=\operatorname{Diff}(\mathcal O_X),$$
and tensoring by $\mathcal O_X(\eta)$ defines an equivalence between left
$\mathcal D_\kappa$-modules and left $\mathcal D_{\kappa+\eta}$-modules.

## Facts & Assumptions

**Given:** The connected simply connected complex semisimple group $G$, its flag variety $X=G/B$, and a complex weight $\kappa$; for the line-bundle claims, an integral weight $\eta$.

[F1] $X$ is smooth and projective and $G\to X$ has Zariski-local sections; on each such chart the action algebroid is the transitive Lie algebroid $\mathcal O_X\otimes\mathfrak g$ with isotropy $\mathfrak b_X$ ([[thm-semisimple-flag-variety-smooth-projective]], [[lem-semisimple-flag-torsor-zariski-charts]]).

[F2] The bracket and anchor in the action-algebroid definition satisfy the Jacobi, Leibniz and anchor identities because they are induced by the Lie algebra action on functions and vector fields ([[def-pa36-flag-tdo-and-module]]).

[F3] An integral weight defines the $G$-equivariant line bundle $\mathcal O_X(\eta)$, and its infinitesimal $G$-action on sections has principal symbol the anchor vector field ([[def-g-linearization-of-an-invertible-sheaf]], [[def-invertible-sheaf]]).



## Proof

1.1 Work on a Zariski open set where $T_X$ and $\mathfrak b_X$ are free and the anchor splits as an $\mathcal O_X$-module map. Combine tangent lifts $x_1,\ldots,x_d$ and a frame $b_1,\ldots,b_s$ of $\mathfrak b_X$ into one frame $e_1,\ldots,e_n$ of the full action algebroid, ordered with the tangent lifts first and the isotropy frame last. For every frame generator use the relations $e_a f=f e_a+a(e_a)(f)$ and, for $b>a$, $e_b e_a=e_a e_b+[e_b,e_a]$ to move functions left and order all generators; write each bracket in the chosen frame with its local function coefficients. Reordering terminates by lexicographic induction on generator degree, the number of generator/function inversions (a generator to the left of a coefficient), and the inversion count of the frame-generator word. A commutator correction lowers generator degree; the leading function move lowers the second count, and an out-of-order generator swap lowers the third. The only overlap types are $e_a(fg)$, $e_b e_a f$, and $e_c e_b e_a$ for arbitrary frame indices, including isotropy indices. Their reductions agree by the derivation rule for the anchor, the anchor identity $a([e_b,e_a])=[a(e_b),a(e_a)]$, and Jacobi for the action-algebroid bracket [F2]. A terminating rewriting system with every such overlap resolved has unique normal forms: induction on maximum remaining reduction length joins any two first reductions at their common overlap, after which induction identifies the normal forms. Hence the ordered monomials in all $e_a$, with coefficients on the left, form a local $\mathcal O_X$-basis, and the indicated ordering puts every tangent-lift monomial before isotropy monomials. Their leading symbols are the corresponding symmetric monomials, proving $\operatorname{gr}\mathcal U_X(\mathfrak g)\cong \operatorname{Sym}_{\mathcal O_X}(\mathcal O_X\otimes\mathfrak g)$. [F1, F2, algebra, construct]

2.1 On a chart pulled back to $G$, the isotropy character is the constant $B$-character $\kappa+\rho$. It kills $[\mathfrak b,\mathfrak b]$ and is invariant under $B$-conjugation; equivariance therefore gives $\chi^X([x,\xi])=a(x)(\chi^X(\xi))$ for every local algebroid section $x$ and isotropy section $\xi$. In the ordered forms of step 1.1, use $b_a=\chi^X(b_a)$ to eliminate each isotropy generator. The overlaps of this elimination with two isotropy generators agree because $\chi^X$ kills their bracket; the overlaps with a tangent lift agree by the displayed invariance identity; and overlaps with functions agree because $a(b_a)=0$. Thus the quotient has the ordered tangent-lift monomials as a local basis, and its associated graded is $$\operatorname{Sym}_{\mathcal O_X}(\mathcal O_X\otimes\mathfrak g)/ (\mathfrak b_X)\cong\operatorname{Sym}_{\mathcal O_X}T_X.$$ The degree-zero part is $\mathcal O_X$, and the first-order commutator is the anchor inherited from $\mathcal U_X(\mathfrak g)$. This proves the TDO axioms and the two-sidedness of the defining ideal. [F1, F2, step 1.1, algebra, construct]

3.1 Suppose $\kappa+\rho$ is integral and put $L=\mathcal O_X(\kappa+\rho)$. The infinitesimal G-linearization of $L$ gives a filtered algebra map $\mathcal U_X(\mathfrak g)\to\operatorname{Diff}(L)$. Its isotropy action on each fiber is the character $\kappa+\rho$, so the map kills the ideal in step 2.1 and descends to $\mathcal D_\kappa\to\operatorname{Diff}(L)$. On associated graded it is the identity map $\operatorname{Sym}T_X\to\operatorname{Sym}T_X$ because both maps send a vector field to its principal symbol. A filtered map with associated-graded isomorphism is an isomorphism: lift any section order by order for surjectivity, and take the leading symbol of a kernel section for injectivity. Thus $\mathcal D_\kappa\cong\operatorname{Diff}(L)$. Taking $\kappa=-\rho$ gives $L=\mathcal O_X$ and the asserted untwisted identity. [F3, step 2.1, algebra]

4.1 For integral $\eta$, write $L_\eta=\mathcal O_X(\eta)$. Locally choose a frame $e$ of $L_\eta$. Tensoring a $\mathcal D_\kappa$-module with $e$ identifies its local differential-operator action with the action for the twist $\kappa+\eta$. If $e'=u e$ on an overlap, with $u$ an invertible regular function, the two local actions are related by conjugation $D\mapsto u^{-1}Du$; this is exactly the transition rule for the TDO parameter shifted by $\eta$. These local equivalences glue. Tensoring by $L_{-\eta}$ reverses the shift and composes with the first functor to the identity. [F3, step 3.1, algebra] ∎
