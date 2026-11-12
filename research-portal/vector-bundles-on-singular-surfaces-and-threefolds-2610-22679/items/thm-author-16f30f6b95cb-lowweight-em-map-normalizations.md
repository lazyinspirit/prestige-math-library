---
id: thm-author-16f30f6b95cb-lowweight-em-map-normalizations
kind: theorem
title: External EM low-weight maps with fixed positive normalization
status: published
domain: mathematics
deps:
  - def-motivic-filtration
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-picard-group-scheme
  - math:def-projective-line-two-affine-cover-and-twisting-sheaf
  - math:cor-picard-projective-line-integers
  - lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space
dependency_roles:
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-picard-group-scheme: mathematical-premise
  math:def-projective-line-two-affine-cover-and-twisting-sheaf: mathematical-premise
  math:cor-picard-projective-line-integers: mathematical-premise
  lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 3.5(8), printed pp. 14–15; Examples 4.11 and 4.26, pp. 22 and
        28; Construction 4.36, p. 32; Lemma 5.1/Definition 5.2 and Theorem 5.3,
        pp. 33–34; Construction 5.5, pp. 34–35; Lemmas 5.10 and 5.12 and (5.8),
        p. 36; Corollary 7.11, p. 52
      statement: The canonical weight-zero comparison is to RΓ_cdh(−,Z). The
        line-bundle K-class map has a canonical lift 1−[L] to Fil¹ K. The SAME
        graded projection carries 1−[O(−1)] to +c₁(O(1)), via Lemma 5.12’s
        homotopy with (5.2). The weight-one comparison RΓ_Nis(G_m)[−1]→Z(1)_mot
        is an equivalence in degrees ≤3.
      hypotheses: Qcqs schemes over a prime field F=Q or F_p for the motivic
        construction; Lemma 5.12 and Corollary 7.11 have this qcqs scope.
        Restriction to smooth finite-type schemes over any extension field k⊇F
        is allowed. The symbol c₁:Pic→K in Construction 5.5 denotes the K-class
        [L], whereas Definition 5.2 denotes the motivic first Chern comparison;
        these are kept distinct below.
      reading_limits: "Retained prior source-reading record: full statements/proofs of
        Examples 4.11/4.26, Lemma 5.1, Lemmas 5.10/5.12 and Corollary 7.11;
        Construction 5.5/5.11 formulas and Theorem 5.3 statement. This repair
        freshly checked those passages and Theorem 3.5(8)/Construction 4.36 in
        the versioned primary PDF text extraction. PDF screenshot requests
        failed with cache misses. Trace filtrations, the projective-bundle proof
        and the Hilbert-90/rigidity inputs were not reconstructed. The local
        groupoid realization is proved in the declared helper, not attributed to
        EM. Lemma 5.12 recalls its classical slice normalization."
dependency_level: 17
local_argument_provenance: ai-altered
---

## Statement
For the filtration and $K$-space assertions in the selected local realization, assume the Axiom of Choice and its fixed compatible site and universe bounds. Use a universe-bounded big Nisnevich site of qcqs prime-field schemes, and restrict it to smooth finite-type $k$-schemes when specified, for any extension field $k$.

Write $\operatorname{Pic}(X)$ for the tensor-product group of isomorphism classes of invertible $\mathcal O_X$-modules. Write $\mathcal{Pic}(X)$ for the groupoid of these modules and their isomorphisms, pointed by $\mathcal O_X$, and $B\mathbb G_m(X)$ for the groupoid of Nisnevich $\mathbb G_m$-torsors and equivariant isomorphisms. Here $\mathbb G_m(U)=\Gamma(U,\mathcal O_U)^\times$. Frame torsors identify the two groupoids; their nerves are the spaces used below. Thus $\mathcal{Pic}$, rather than its component group $\operatorname{Pic}$, is the domain of the line-class map. Derived sections and this torsor interpretation use the same bounded site.

For the actual EM filtration, let $q_j:\operatorname{Fil}^jK\to\operatorname{gr}^jK=\mathbb Z(j)_{\mathrm{mot}}[2j]$ be the cofiber projection. The canonical weight-zero comparison, induced by the unital filtered map of EM Construction 4.36, is $\operatorname{gr}^0K\simeq R\Gamma_{\mathrm{cdh}}(-,\mathbb Z)$. On a smooth finite-type scheme over a field its $H^0$ consists of locally constant integer functions, compatibly with evaluation at field points; this is also the weight-zero case of EM Theorem 3.5(8).

There is a natural pointed map $a:\mathcal{Pic}\to\Omega^\infty\operatorname{Fil}^1K$ lifting $L\mapsto1-[L]$. Under the canonical comparison $c_1:R\Gamma_{\mathrm{Nis}}(-,\mathbb G_m)[-1]\to\mathbb Z(1)_{\mathrm{mot}}$, one has $q_1a(\mathcal O(-1))=+c_1(\mathcal O(1))$ on $\mathbb P^1_k$. The comparison is an equivalence through cohomological degree three; after shifting by two and taking zeroth spaces it identifies $\Omega^\infty\operatorname{gr}^1K$ with the line-bundle stack $B\mathbb G_m$. On sections its $\pi_0$ is $\operatorname{Pic}(X)$ and its $\pi_1$ at any line bundle is $\Gamma(X,\mathcal O_X)^\times$.

Use the projective line glued from $\operatorname{Spec}k[t]$ and $\operatorname{Spec}k[u]$ by $u=t^{-1}$, with twist frames $e_\infty=t^ne_0$ for $\mathcal O(n)$. This is the usual convention in the imported formula: $\mathcal O(-1)$ is the tautological sub-line and $\mathcal O(1)$ its dual. The weight-one projective-bundle formula uses $+c_1(\mathcal O(1))$; under $\operatorname{Pic}(\mathbb P^1_k)\simeq\mathbb Z$, the class of $\mathcal O(1)$ maps to $+1$, so its first Chern class is the positive generator under the same canonical comparison. On smooth prime-field schemes, the proof of EM Lemma 5.10 explicitly identifies $q_0$ with rank.

## Statement references
[[def-motivic-filtration]]

[[def-motivic-cohomology]]

[[math:def-picard-group-scheme]]

[[math:def-projective-line-two-affine-cover-and-twisting-sheaf]]

[[math:cor-picard-projective-line-integers]]

[[lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space]]

## Source contract
[A1] The assumed [[math:def-axiom-of-choice]] and fixed bounds discharge [[def-motivic-filtration]] for the selected local perfect-$K$ tower and its maps, and the derived/groupoid realization in [F2]. The underlying motivic-complex comparison and its source hypotheses are unchanged; these are local realization assumptions rather than new geometric hypotheses of the published result.

**Given:** Qcqs schemes over a prime field, Choice and compatible bounds, the actual EM filtered spectrum and the cited canonical comparisons. Restriction to smooth finite-type $k$-schemes is allowed for any extension field $k$.

**Goal:** Import the actual maps and their sign with their groupoid and twisting conventions.

[F1] EM Examples 4.11/4.26, Construction 4.36, Construction 5.5, Lemmas 5.10/5.12, Lemma 5.1/Definition 5.2, Theorem 5.3 and Corollary 7.11 supply the comparisons and normalized maps in the Statement, with the source hypotheses in reference 0. Construction 5.5 uses the line-class map $L\mapsto[L]$ in $K$-theory, whereas Definition 5.2 uses the additive motivic first Chern map. [[def-motivic-cohomology]] fixes the latter's complex and cohomological indexing.

[F2] [[lem-adjudicate-ef9b31e59a9f-nisnevich-picard-space]] supplies the natural equivalence $\Omega^\infty H(R\Gamma_{\mathrm{Nis}}(-,\mathbb G_m)[1])\simeq B\mathbb G_m\simeq\mathcal{Pic}$, including morphisms and the component group of [[math:def-picard-group-scheme]]. This distinguishes the stack from its group of isomorphism classes. [[math:def-projective-line-two-affine-cover-and-twisting-sheaf]] supplies the stated charts and frame convention; with $t=x_1/x_0$, frames $x_0^n,x_1^n$ have exactly the relation $e_\infty=t^ne_0$. This identifies these twists with the standard ones used by [F1] and [[math:cor-picard-projective-line-integers]], whose field-level calculation gives the positive generator.

## External input
Import [F1] for the actual EM maps and their comparison homotopies, with the statement, hypotheses and reading limits of reference 0. The groupoid realization is the local result [F2]. In the shifted comparison, the homotopy groups in nonnegative degree $n$ are the cohomology groups of the unshifted complexes in degree $2-n$. These are within the cited comparison range, so the actual $c_1$ map gives an objectwise equivalence on zeroth spaces. Composing with [F2] fixes the claimed identification with the whole line-bundle stack, including its automorphisms.

Define $\kappa=-a$ using additive inversion in the target infinite loop space. It lifts $[L]-1$, and the imported normalization gives $q_1\kappa(\mathcal O(-1))=-c_1(\mathcal O(1))=c_1(\mathcal O(-1))$, since dualizing a line bundle negates its Picard class. This fixes the ensuing positive determinant normalization via the actual $c_1$ comparison, rather than an independently chosen equivalence of Picard groups.
