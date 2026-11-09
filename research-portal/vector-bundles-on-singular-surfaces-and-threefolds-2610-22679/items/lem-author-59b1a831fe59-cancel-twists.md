---
id: lem-author-59b1a831fe59-cancel-twists
kind: lemma
title: Perfect-field cancellation removes exactly d coefficient twists
status: draft
domain: mathematics
deps:
  - thm-author-59b1a831fe59-perfect-cancellation
  - thm-author-59b1a831fe59-classical-derived-input
  - lem-author-9415fc97ee80-purity-shift-index
  - thm-author-91088613574d-smooth-comparison-input
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-59b1a831fe59-perfect-cancellation: mathematical-premise
  thm-author-59b1a831fe59-classical-derived-input: mathematical-premise
  lem-author-9415fc97ee80-purity-shift-index: mathematical-premise
  thm-author-91088613574d-smooth-comparison-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 13
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied classical derived-category model. Let $k$ be perfect, let $A$ be an object of $DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)$, and let $d\geq0$, $j\geq d$ and $i\in\mathbb Z$. The canonical Tate coefficient convention and repeated cancellation give
$$\operatorname{Hom}(A(d)[2d],\mathbb Z(j)[i])\cong\operatorname{Hom}(A,\mathbb Z(j-d)[i-2d]).$$
For $A=M(\operatorname{Spec}L)$ with $L/k$ finite separable, the right side is $H^{i-2d,j-d}_{\mathrm{mot}}(L,\mathbb Z)$ under the actual smooth/classical comparison. This argument supplies no effective negative-weight coefficient when $j<d$; that range is computed by the preceding cycle lemma.

## Facts & Assumptions
**Given:** The effective category, perfect field and exact integer range just stated, together with the ambient Choice and site/universe assumptions.

**Goal:** Prove the previously missing coefficient-twist comparison with its correct bounds.

[A1] The Axiom of Choice and the fixed small-site/universe bounds are inherited from the source contract of the classical derived-category input in [F2]. They are used for its coefficient models and representability, including the field-group identification in step 2.1. The smooth-comparison use in [F3] is only its complex comparison, not its Choice-qualified filtered-spectrum assertion. [[math:def-axiom-of-choice]]

[F1] [[thm-author-59b1a831fe59-perfect-cancellation]] imports Voevodsky's perfect-field full faithfulness of tensoring by the Tate motive.

[F2] [[thm-author-59b1a831fe59-classical-derived-input]] fixes the actual Tate convention $\mathbb Z(r)(d)\cong\mathbb Z(r+d)$ for $r,d\geq0$, and classical representability on smooth schemes. [[lem-author-9415fc97ee80-purity-shift-index]] supplies the source-shift sign.

[F3] The smooth comparison identifies the classical motivic complex with the EM complex on a smooth finite-type scheme over a field in nonnegative weight. [[thm-author-91088613574d-smooth-comparison-input]]

## Proof
1.1 Put $r=j-d\geq0$. Apply [F1] repeatedly $d$ times to $A$ and $\mathbb Z(r)[i-2d]$. At each step both objects remain effective and the coefficient twist remains nonnegative, so every application has its stated hypotheses. This gives the inverse of the canonical bijection $\operatorname{Hom}(A,\mathbb Z(r)[i-2d])\xrightarrow{\sim}\operatorname{Hom}(A(d),\mathbb Z(r)(d)[i-2d]).$ Use [F2] to identify the last coefficient with $\mathbb Z(j)$. [A1, F1, F2, given]

2.1 Shifting the source by $[2d]$ subtracts $2d$ from the target cohomological shift, by [F2]. This gives exactly the displayed formula. For $A=M(\operatorname{Spec}L)$, representability identifies its right side with the classical weight-$r$ field group; $\operatorname{Spec}L$ is smooth separated finite type over the perfect field $k$ because $L/k$ is finite separable, and $r=j-d\geq0$. Thus [F3] identifies that classical group with the specified EM field group under its exact hypotheses. If $j<d$, step 1.1 would require $r<0$ and is not invoked. Thus there is no concealed cancellation into a negative effective coefficient. [A1, F2, F3, step 1.1] ∎
