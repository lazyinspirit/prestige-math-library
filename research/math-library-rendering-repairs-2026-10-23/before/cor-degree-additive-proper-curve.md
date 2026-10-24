---
id: cor-degree-additive-proper-curve
kind: corollary
title: "Degree is additive on invertible sheaves over a proper curve"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-coherent-module-scheme
  - def-degree-invertible-sheaf-proper-dimension-one
  - def-dimension-noetherian-topological-space
  - def-euler-characteristic-coherent-sheaf
  - def-invertible-sheaf
  - def-integral-scheme
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-proper-morphism
  - def-support-module-sheaf
  - lem-closed-immersion-cohomology-pushforward
  - lem-closed-immersion-projection-formula-invertible
  - lem-coherent-devissage-one-generic-generator
  - lem-euler-characteristic-additive-short-exact
  - lem-euler-characteristic-finite-support-twist-invariance
  - lem-euler-characteristic-twist-integral-proper-curve
  - lem-invertible-sheaf-dual-tensor-inverse
  - lem-tensor-qc-modules-quasi-coherent
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-exactness-of-sheaves-stalkwise
  - thm-unit-isomorphisms-for-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: devissage
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-26.md
      - research/frontier-38-owner-30-dispatch/reader-reader-26.result.json
      - research/frontier-38-owner-30-step5-hash-26-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-26-5a-decisions.json
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, Varieties, Section 33.44 (Degrees on curves), Lemma 33.44.7 (tag 0AYX)"
      url: "https://stacks.math.columbia.edu/tag/0AYQ"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.12.6 (tag 01YI), devissage of coherent sheaves"
      url: "https://stacks.math.columbia.edu/tag/01YI"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and
let $C$ be a proper $k$-scheme ([[def-proper-morphism]]) whose underlying
topological space has dimension at most one
([[def-dimension-noetherian-topological-space]]). For all invertible
$\mathcal O_C$-modules $\mathcal L$ and $\mathcal M$
([[def-invertible-sheaf]]):

1. $\deg_C(\mathcal L\otimes_{\mathcal O_C}\mathcal M)=\deg_C(\mathcal L)+\deg_C(\mathcal M)$;
2. $\deg_C(\mathcal L^{\vee})=-\deg_C(\mathcal L)$;
3. $\chi(C,\mathcal L\otimes\mathcal M)-\chi(C,\mathcal L)-\chi(C,\mathcal M)+\chi(C,\mathcal O_C)=0$,

with $\deg_C$ as in [[def-degree-invertible-sheaf-proper-dimension-one]] and
$\chi$ as in [[def-euler-characteristic-coherent-sheaf]]. The curve $C$ need
not be reduced, irreducible or normal; closed subschemes of proper
$k$-schemes, in particular effective Cartier divisors on proper surfaces, are
the intended instances.

## Facts & Assumptions

**Given:** a field $k$, a proper $k$-scheme $C$ of dimension at most one, invertible $\mathcal O_C$-modules $\mathcal L$ and $\mathcal M$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] Set-up: $C$ is proper over $k$, hence of finite type, so its affine charts are spectra of Noetherian rings and $C$ is locally Noetherian and quasi-compact, hence Noetherian ([[def-proper-morphism]], [[def-locally-noetherian-and-noetherian-scheme]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]). On the locally Noetherian $C$ a quasi-coherent module is coherent if and only if it is of finite type ([[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-coherent-module-scheme]]), and $\chi(C,\mathcal G)$ is defined for every coherent $\mathcal G$; in particular $\deg_C$ is defined on invertible modules ([[def-euler-characteristic-coherent-sheaf]], [[def-degree-invertible-sheaf-proper-dimension-one]]).

[F2] Exactness and coherence of twisting: tensoring with an invertible module is exact, and the tensor product of an invertible module with a coherent module is coherent; the unit isomorphism gives $\mathcal O_C\otimes\mathcal G\cong\mathcal G$ ([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]], [[thm-exactness-of-sheaves-stalkwise]], [[lem-tensor-qc-modules-quasi-coherent]], [[thm-unit-isomorphisms-for-module-tensor-products]], [[def-coherent-module-scheme]]).

[F3] Euler characteristic is additive in short exact sequences of coherent modules on the proper $k$-scheme $C$ ([[lem-euler-characteristic-additive-short-exact]]).

[F4] Noetherian devissage ([[lem-coherent-devissage-one-generic-generator]]): a property of coherent $\mathcal O_C$-modules that holds for the zero module, satisfies the two-of-three property in every short exact sequence of coherent modules, and holds for a suitable witness on every integral closed subscheme of $C$, holds for every coherent $\mathcal O_C$-module. The witnesses are modules with support in the subscheme whose generic stalk is annihilated by the maximal ideal and is one-dimensional over the residue field.

[F5] Integral closed subschemes of $C$: an integral closed subscheme $Z\subseteq C$ is nonempty, reduced and irreducible; since $\dim C\le1$, either $Z$ has dimension one, or $Z$ is a single closed point ([[def-integral-scheme]], [[def-dimension-noetherian-topological-space]], [[def-closed-immersion-schemes]]). Write $i:Z\to C$ for the closed immersion and $\xi_Z$ for the generic point of $Z$; then $\mathcal O_{Z,\xi_Z}=\kappa(\xi_Z)$ is a field, the structure sheaf $\mathcal O_Z$ is coherent on the locally Noetherian $Z$, and $i_*\mathcal O_Z$ is coherent on $C$, with $(i_*\mathcal O_Z)_{\xi_Z}\cong\kappa(\xi_Z)$ annihilated by the maximal ideal of $\mathcal O_{C,\xi_Z}$ ([[def-coherent-module-scheme]], [[lem-closed-immersion-cohomology-pushforward]]).

[F6] Projection formula and closed-immersion cohomology ([[lem-closed-immersion-projection-formula-invertible]], [[lem-closed-immersion-cohomology-pushforward]]): for an invertible $\mathcal O_C$-module $\mathcal N$ and a quasi-coherent $\mathcal O_Z$-module $\mathcal G$ there are isomorphisms $\mathcal N\otimes i_*\mathcal G\cong i_*(i^*\mathcal N\otimes\mathcal G)$ and $H^q(C,\mathcal N\otimes i_*\mathcal G)\cong H^q(Z,i^*\mathcal N\otimes\mathcal G)$ for all $q$; when $\mathcal G$ is coherent, these isomorphisms also give $\chi(C,\mathcal N\otimes i_*\mathcal G)=\chi(Z,i^*\mathcal N\otimes\mathcal G)$.

[F7] Closed points: for a closed point $p$ of $C$ with residue field $\kappa(p)$ the pushforward $i_*\kappa(p)$ is coherent, and $\mathcal N\otimes i_*\kappa(p)\cong i_*\kappa(p)$ for every invertible $\mathcal N$, so that $\chi(C,\mathcal N\otimes i_*\kappa(p))=\chi(C,i_*\kappa(p))$ ([[lem-euler-characteristic-finite-support-twist-invariance]]; [[def-support-module-sheaf]]).

[F8] Integral curves: if $Z\subseteq C$ is an integral closed subscheme of dimension one, then $Z$ is an integral proper $k$-scheme of dimension one, so for invertible modules $\mathcal N$ on $Z$ and coherent $\mathcal F$ on $Z$ one has $\chi(Z,\mathcal N\otimes\mathcal F)=r\deg_Z(\mathcal N)+\chi(Z,\mathcal F)$ with $r$ the rank of $\mathcal F$ at the generic point; for invertible $\mathcal F$ the rank is one, and $i^*\mathcal L$, $i^*\mathcal M$ are invertible on $Z$ ([[lem-euler-characteristic-twist-integral-proper-curve]], [[def-degree-invertible-sheaf-proper-dimension-one]]).

[F9] Dual and tensor: $\mathcal L^{\vee}\otimes_{\mathcal O_C}\mathcal L\cong\mathcal O_C$ canonically, so $\deg_C(\mathcal O_C)=0$ and statements about $\mathcal L\otimes\mathcal L^{\vee}$ may be read off from the additive identity of statement 1 ([[lem-invertible-sheaf-dual-tensor-inverse]], [[def-degree-invertible-sheaf-proper-dimension-one]]).

[F10] The Axiom of Choice enters through the Euler-characteristic, additivity, devissage and integral-curve suppliers [F3]–[F8]; the tensor computations below make no selection.

## Proof

**Proof technique:** devissage on the Noetherian scheme $C$ for the defect $D(\mathcal F):=\chi(C,\mathcal F)-\chi(C,\mathcal L\otimes\mathcal F)-\chi(C,\mathcal M\otimes\mathcal F)+\chi(C,\mathcal L\otimes\mathcal M\otimes\mathcal F)$.

1.1 Set-up and defect. For a coherent $\mathcal O_C$-module $\mathcal F$ the four tensor products appearing in $D(\mathcal F)$ are coherent by [F2], so all four Euler characteristics are defined; by [F2] $D(\mathcal O_C)=\chi(C,\mathcal O_C)-\chi(C,\mathcal L)-\chi(C,\mathcal M)+\chi(C,\mathcal L\otimes\mathcal M)$, and it suffices for statements 1 and 3 to prove $D(\mathcal F)=0$ for the single coherent module $\mathcal F=\mathcal O_C$. [F1, F2]

1.2 Additivity of the defect. Let $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ be a short exact sequence of coherent $\mathcal O_C$-modules. Tensoring with $\mathcal L$, with $\mathcal M$ and with $\mathcal L\otimes\mathcal M$ preserves exactness by [F2], so all four sequences appearing in $D$ are short exact with coherent terms, and [F3] gives $\chi(C,\mathcal G)=\chi(C,\mathcal G')+\chi(C,\mathcal G'')$ for $\mathcal G\in\{\mathcal F,\mathcal L\otimes\mathcal F,\mathcal M\otimes\mathcal F,\mathcal L\otimes\mathcal M\otimes\mathcal F\}$. Adding the untwisted and doubly twisted identities and subtracting the two singly twisted identities yields $D(\mathcal F)=D(\mathcal F')+D(\mathcal F'')$; in particular $D$ has the two-of-three property, and $D(0)=0$. [F2, F3]

1.3 Integral closed subschemes. By [F5] an integral closed subscheme $Z\subseteq C$ is either a closed point or of dimension one; in both cases the witness $\mathcal G:=\mathcal O_Z$ pushed forward along $i$ is coherent on $C$, has support contained in $Z$, generic stalk $\kappa(\xi_Z)$ annihilated by the maximal ideal of $\mathcal O_{C,\xi_Z}$, of dimension one over $\kappa(\xi_Z)$. [F5]

2.1 The closed-point case. If $Z=\{p\}$ is a closed point, then $i_*\mathcal O_Z=i_*\kappa(p)$ and [F7] gives $D(i_*\kappa(p))=\chi(C,i_*\kappa(p))-\chi(C,i_*\kappa(p))-\chi(C,i_*\kappa(p))+\chi(C,i_*\kappa(p))=0$, because each of the twisted modules $\mathcal L\otimes i_*\kappa(p)$, $\mathcal M\otimes i_*\kappa(p)$ and $\mathcal L\otimes\mathcal M\otimes i_*\kappa(p)$ is isomorphic to $i_*\kappa(p)$. [F7, step 1.3]

2.2 The one-dimensional case. If $Z$ has dimension one, then $Z$ is an integral proper curve of dimension one over $k$, and by the projection formula of [F6] applied to the invertible modules $\mathcal O_C$, $\mathcal L$, $\mathcal M$, $\mathcal L\otimes\mathcal M$ and to $\mathcal G=\mathcal O_Z$, $$D(i_*\mathcal O_Z)=\chi(Z,\mathcal O_Z)-\chi(Z,i^*\mathcal L)-\chi(Z,i^*\mathcal M)+\chi(Z,i^*\mathcal L\otimes i^*\mathcal M).$$ The modules $i^*\mathcal L$ and $i^*\mathcal M$ are invertible on $Z$, and $i^*\mathcal L\otimes i^*\mathcal M\cong i^*(\mathcal L\otimes\mathcal M)$ has generic rank one; the integral-curve twist identity of [F8] applied on $Z$ with invertible $\mathcal F=i^*\mathcal M$ gives $\chi(Z,i^*\mathcal L\otimes i^*\mathcal M)=\deg_Z(i^*\mathcal L)+\chi(Z,i^*\mathcal M)$, and $\deg_Z(i^*\mathcal L)=\chi(Z,i^*\mathcal L)-\chi(Z,\mathcal O_Z)$ by definition of the degree. Substituting, the right-hand side vanishes. [F6, F8, step 1.3]

3.1 Devissage and the additive identity. By steps 1.2, 2.1 and 2.2 the defect $D$ holds for the zero module, satisfies the two-of-three property, and vanishes on the witness $i_*\mathcal O_Z$ of every integral closed subscheme $Z\subseteq C$; the devissage lemma [F4] therefore gives $D(\mathcal F)=0$ for every coherent $\mathcal O_C$-module $\mathcal F$. Applying this to $\mathcal F=\mathcal O_C$ and using $D(\mathcal O_C)=\chi(C,\mathcal O_C)-\chi(C,\mathcal L)-\chi(C,\mathcal M)+\chi(C,\mathcal L\otimes\mathcal M)$ yields statement 3, and rearranging gives $\chi(C,\mathcal L\otimes\mathcal M)-\chi(C,\mathcal O_C)=(\chi(C,\mathcal L)-\chi(C,\mathcal O_C))+(\chi(C,\mathcal M)-\chi(C,\mathcal O_C))$, which is statement 1 by the definition of $\deg_C$. [F1, F4, step 1.2, step 2.1, step 2.2]

4.1 Statement 2. Applying statement 1 of step 3.1 to the pair $(\mathcal L,\mathcal L^{\vee})$ and using $\mathcal L\otimes\mathcal L^{\vee}\cong\mathcal O_C$ and $\deg_C(\mathcal O_C)=0$ of [F9] gives $0=\deg_C(\mathcal O_C)=\deg_C(\mathcal L\otimes\mathcal L^{\vee})=\deg_C(\mathcal L)+\deg_C(\mathcal L^{\vee})$, hence $\deg_C(\mathcal L^{\vee})=-\deg_C(\mathcal L)$. [F9, step 3.1]

5.1 Conclusion and choice accounting. Step 3.1 gives statements 1 and 3 and step 4.1 gives statement 2. The Axiom of Choice enters only through the suppliers recorded in [F10]: the Euler-characteristic additivity [F3], the devissage lemma [F4], the projection formula and closed-immersion cohomology [F6], the closed-point twist invariance [F7] and the integral-curve twist identity [F8]; the curve, the sheaves and the point arguments are given, and no selection is made in steps 1.1–3.1. [F10, step 3.1, step 4.1] ∎
