---
id: rem-general-serre-duality-deferred
kind: remark
title: "Higher-dimensional duality is not imported into the curve theorem"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-ext-for-coherent-modules
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - thm-serre-duality-curves-coherent-sheaves
  - thm-serre-duality-curves-line-bundles
  - thm-serre-duality-curves-vector-bundles
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02

---

## Remark

This page records three concrete curve forms of Serre duality. The statements
below retain their stated field hypotheses. Assume AC as in the cited curve
theorems, and let $C$ be a smooth proper geometrically integral curve over a
field $k$. All three forms use the same normalized trace
$t_C:H^1(C,\omega_C)\to k$ ([[def-smooth-projective-dualizing-line-bundle-and-trace]]).

1. For an invertible $\mathcal O_C$-module $\mathcal L$ over an arbitrary field
   $k$, there is the functorial perfect pairing
   $$H^1(C,\mathcal L)\times H^0(C,\omega_C\otimes\mathcal L^{-1})\longrightarrow k,\qquad (c,s)\longmapsto t_C(c\cup s),$$
   where $\omega_C=\Omega^1_{C/k}$ ([[thm-serre-duality-curves-line-bundles]]).
   The line-bundle theorem identifies this fixed trace with the negative of
   the positive residue-sum functional under its stated perfect-field hypothesis.
2. Over an arbitrary field, for a finite locally free $\mathcal O_C$-module
   $\mathcal E$ of rank $r$, there is the functorial perfect pairing
   $$H^1(C,\mathcal E)\times H^0(C,\mathcal E^\vee\otimes\omega_C)\longrightarrow k,\qquad (c,s)\longmapsto t_C(c\cup s),$$
   using contraction and the same trace
   ([[thm-serre-duality-curves-vector-bundles]]). For rank one this is the
   line-bundle form in item 1.
3. For every coherent $\mathcal O_C$-module $\mathcal F$ over an arbitrary
   field, there are canonical, functorial isomorphisms
   $$\operatorname{Hom}_{\mathcal O_C}(\mathcal F,\omega_C)\cong H^1(C,\mathcal F)^*,\qquad \operatorname{Ext}^1_{\mathcal O_C}(\mathcal F,\omega_C)\cong H^0(C,\mathcal F)^*$$
   ([[thm-serre-duality-curves-coherent-sheaves]]). Both are the pairings
   formed with the fixed trace. Explicitly, the first sends
   $\alpha:\mathcal F\to\omega_C$ to the functional
   $u\mapsto t_C(H^1(\alpha)(u))$. The second sends
   $\xi\in\operatorname{Ext}^1(\mathcal F,\omega_C)$ to the functional
   $s\mapsto t_C(\chi_{\omega_C}(\operatorname{Ext}^1(s,\omega_C)(\xi)))$,
   where $s:\mathcal O_C\to\mathcal F$ is a global section and
   $\chi_{\omega_C}:\operatorname{Ext}^1(\mathcal O_C,\omega_C)\cong
   H^1(C,\omega_C)$ is the canonical comparison used in that theorem.

The Ext groups in item 3 are **global Ext** as defined in
[[def-sheaf-ext-for-coherent-modules]]: they are computed as the cohomology of
$\operatorname{Hom}_{\mathcal O_C}(\mathcal F,I^\bullet)$ for an injective
resolution of the second argument. The definition distinguishes these groups
from the sheaves $\mathcal Ext^q$ and notes that, in positive degree, global
Ext is not generally the global sections of sheaf Ext. The groups
$H^q(C,-)$ are the right-derived functors of global sections
([[def-sheaf-cohomology-derived-global-sections]]).

The coherent form is established on its own theorem page using an actual
finite locally free resolution on the curve. For an ample invertible sheaf
$L$, a sufficiently large twist $\mathcal F\otimes L^{\otimes m}$ is globally
generated; its finite-dimensional space of global sections gives a
surjection $\mathcal E\twoheadrightarrow\mathcal F$ with $\mathcal E$ finite
locally free. Its kernel $\mathcal E'$ is coherent and torsion-free, hence
finite locally free on the smooth curve. Thus the resolution used there is
$$0\longrightarrow\mathcal E'\longrightarrow\mathcal E\longrightarrow\mathcal F\longrightarrow0.$$
This is the curve-specific argument in
[[thm-serre-duality-curves-coherent-sheaves]]; it does not invoke the
projective-space finite-resolution lemma.

The line-bundle and finite locally free curve theorems specialize the
published Serre duality theorem for finite locally free sheaves on a smooth
projective variety over a field
([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]).
The coherent theorem builds on the finite locally free curve pairing and
supplies the curve-specific resolution argument above. This summary adds no
higher-dimensional duality claim. It does not import dualizing complexes,
Grothendieck duality for non-proper or higher-dimensional morphisms, local
cohomology, or relative duality over a base scheme more general than a field.
