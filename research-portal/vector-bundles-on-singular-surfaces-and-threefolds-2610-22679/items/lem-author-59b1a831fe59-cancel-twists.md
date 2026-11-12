---
id: lem-author-59b1a831fe59-cancel-twists
kind: lemma
title: Perfect-field cancellation removes exactly d coefficient twists
status: published
domain: mathematics
deps:
  - thm-author-59b1a831fe59-perfect-cancellation
  - thm-author-59b1a831fe59-classical-derived-input
  - lem-author-9415fc97ee80-purity-shift-index
  - thm-author-91088613574d-smooth-comparison-input
  - math:def-axiom-of-choice
  - def-motivic-cohomology
  - math:def-perfect-field
  - math:ex-finite-etale-separable-extension
  - math:def-etale-morphism-schemes
  - math:def-finite-morphism-schemes
  - math:lem-affine-morphism-separated
  - math:def-finite-type-and-module-finite-algebras
  - math:cor-affine-scheme-quasi-compact
  - math:def-locally-finite-type-and-finite-type-morphism
dependency_roles:
  thm-author-59b1a831fe59-perfect-cancellation: mathematical-premise
  thm-author-59b1a831fe59-classical-derived-input: mathematical-premise
  lem-author-9415fc97ee80-purity-shift-index: mathematical-premise
  thm-author-91088613574d-smooth-comparison-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:ex-finite-etale-separable-extension: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  math:def-finite-morphism-schemes: mathematical-premise
  math:lem-affine-morphism-separated: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
formulation_deps:
  - thm-author-59b1a831fe59-perfect-cancellation
  - thm-author-59b1a831fe59-classical-derived-input
  - lem-author-9415fc97ee80-purity-shift-index
  - math:def-axiom-of-choice
  - def-motivic-cohomology
  - math:def-perfect-field
  - math:ex-finite-etale-separable-extension
argument_deps:
  - thm-author-59b1a831fe59-perfect-cancellation
  - thm-author-59b1a831fe59-classical-derived-input
  - lem-author-9415fc97ee80-purity-shift-index
  - thm-author-91088613574d-smooth-comparison-input
  - math:def-axiom-of-choice
  - def-motivic-cohomology
  - math:def-perfect-field
  - math:ex-finite-etale-separable-extension
  - math:def-etale-morphism-schemes
  - math:def-finite-morphism-schemes
  - math:lem-affine-morphism-separated
  - math:def-finite-type-and-module-finite-algebras
  - math:cor-affine-scheme-quasi-compact
  - math:def-locally-finite-type-and-finite-type-morphism
---

## Statement
For the identification with the selected local motivic cohomology below, additionally retain that construction's compatible nested-universe, scheme, site and coefficient bounds: fix $U\in V\in W$ with $\omega\in U$, containing the field and scheme data in $U$ and coefficient data in $V$, with categories formed in $W$. Existence and compatible enlargement of these bounds are separate size assumptions.

Assume the Axiom of Choice and the fixed site and universe bounds of the supplied classical derived-category model. Let $k$ be perfect, let $A$ be an object of $DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)$, and let $d,j\in\mathbb Z$ with $d\geq0$ and $j\geq d$, and $i\in\mathbb Z$. The canonical Tate coefficient convention and repeated cancellation give
$$\operatorname{Hom}(A(d)[2d],\mathbb Z(j)[i])\cong\operatorname{Hom}(A,\mathbb Z(j-d)[i-2d]).$$
For $A=M(\operatorname{Spec}L)$ with $L/k$ finite separable, the right side is $H^{i-2d,j-d}_{\mathrm{mot}}(L,\mathbb Z)$ under the actual smooth/classical comparison. This argument supplies no effective negative-weight coefficient when $j<d$ and makes no computation in that range for a general $A$.

## Facts & Assumptions
**Given:** The effective category, perfect field and exact integer range just stated, together with the ambient Choice and site/universe assumptions.

**Goal:** Prove the previously missing coefficient-twist comparison with its correct bounds.

[A1] The Axiom of Choice and the fixed classical small-site/universe bounds are inherited from the classical derived-category input in [F2]; they cover its coefficient and tensor models in step 1.1. For the field specialization in step 2.1, additionally retain the compatible nested-universe, scheme, site and coefficient bounds of [[def-motivic-cohomology]] and the selected local complex realization in [F3], with $U\in V\in W$ and $\omega\in U$ as stated above. Choice is retained for that local motivic/cycle comparison as well as for classical representability and the affine quasi-compactness input in [F4]. No filtered-spectrum comparison is used. Universe existence and compatible enlargements are assumed separately. [[math:def-axiom-of-choice]]

[F1] [[thm-author-59b1a831fe59-perfect-cancellation]] imports Voevodsky's perfect-field full faithfulness of tensoring by the Tate motive, in its specified integral effective Nisnevich category. Perfect means that every nonconstant irreducible polynomial over the field is separable. [[math:def-perfect-field]]

[F2] [[thm-author-59b1a831fe59-classical-derived-input]] supplies the actual bounded-above derived transfer-tensor model, the Tate convention $\mathbb Z(r)(d)\cong\mathbb Z(r+d)$ for $r,d\geq0$, and classical representability on smooth schemes. [[lem-author-9415fc97ee80-purity-shift-index]] supplies the source-shift sign.

[F3] The smooth comparison identifies the classical motivic complex with the EM complex on a smooth finite-type scheme over a field in nonnegative weight. [[thm-author-91088613574d-smooth-comparison-input]]

[F4] For a finite separable extension $L/k$, the structure morphism $f:\operatorname{Spec}L\to\operatorname{Spec}k$ is finite étale by the reverse implication of [[math:ex-finite-etale-separable-extension]]. Étale morphisms are smooth by [[math:def-etale-morphism-schemes]]. Finiteness gives affine inverse images with module-finite coordinate algebras by [[math:def-finite-morphism-schemes]], and hence affineness; [[math:lem-affine-morphism-separated]] gives separatedness. A module generating list also generates its algebra, so module-finite implies finite type by [[math:def-finite-type-and-module-finite-algebras]]. Under [A1], these affine inverse images are quasi-compact by [[math:cor-affine-scheme-quasi-compact]]. Thus $f$ is quasi-compact and locally of finite type, hence of finite type by [[math:def-locally-finite-type-and-finite-type-morphism]]. These checks put $\operatorname{Spec}L$ in the smooth separated finite-type domain of [F2] and [F3]; [F3]'s supplied finite-type domain check also puts it in the qcqs domain of [F5].

[F5] [[def-motivic-cohomology]] defines $H^{n,r}_{\mathrm{mot}}(Y,\mathbb Z)$ as $H^n(\mathbb Z(r)_{\mathrm{mot}}(Y))$ for a qcqs $k$-scheme $Y$ and integer $r\geq0$. In the field notation used here, $H^{n,r}_{\mathrm{mot}}(L,\mathbb Z)$ abbreviates this group for $Y=\operatorname{Spec}L$.

## Proof
1.1 Put $r=j-d\geq0$. For a bounded-above coefficient complex $B$ and integer $n$, translating its resolution in the representable-projective model of [F2] gives a valid resolution of $B[n]$. Translating the first factor of the cochain tensor by $[n]$ reindexes total degree by $n$ and gives exactly the differential of the shifted total complex. Hence $(B[n])(d)\cong(B(d))[n]$; degreewise sheafification and the supplied effective localization retain this identification. Apply [F1] repeatedly $d$ times to $A$ and $\mathbb Z(r)[i-2d]$. At each step both objects remain effective and bounded above, with nonnegative coefficient twist, so the hypotheses hold. For $d=0$ this is the identity. The result is the inverse of the canonical bijection $\operatorname{Hom}(A,\mathbb Z(r)[i-2d])\xrightarrow{\sim}\operatorname{Hom}(A(d),\mathbb Z(r)(d)[i-2d])$, using the just verified shift identification. The Tate convention in [F2] identifies $\mathbb Z(r)(d)$ with $\mathbb Z(j)$. [A1, F1, F2, given]

2.1 Shifting the source by $[2d]$ subtracts $2d$ from the target cohomological shift, by [F2]. This gives exactly the displayed formula. For $A=M(\operatorname{Spec}L)$ with $L/k$ finite separable, [F4] verifies the smooth separated finite-type hypotheses before invoking representability in [F2], so the right side is the classical weight-$r$ group in degree $i-2d$. Since $r=j-d\geq0$, [F3] identifies its coefficient complex with the EM complex, and [F5] identifies its degree-$(i-2d)$ cohomology with $H^{i-2d,j-d}_{\mathrm{mot}}(L,\mathbb Z)$. If $j<d$, step 1.1 would require $r<0$ and is not invoked; it computes no group in that range for a general $A$. Thus there is no concealed cancellation into a negative effective coefficient. [A1, F2, F3, F4, F5, step 1.1] ∎
