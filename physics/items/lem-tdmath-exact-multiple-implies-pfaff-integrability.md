---
id: lem-tdmath-exact-multiple-implies-pfaff-integrability
kind: lemma
title: "An exact nonzero multiple satisfies the Pfaff condition"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tdmath-one-form-and-horizontal-path, thm-chain-rule-for-total-derivatives, thm-continuous-implies-integrable, thm-newton-leibniz-with-interior-derivative, thm-heine-borel-rn, thm-heine-cantor-metric]
dependency_roles:
  def-tdmath-one-form-and-horizontal-path: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §33.2, full 84-page lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Let $U\subseteq\mathbb R^{n+1}$ be open. Let $\omega$ be a $C^1$ one-form on $U$, $\mu\in C^1(U)$ nowhere zero, and $S\in C^2(U)$ with $dS=\mu\omega$. Then $\omega\wedge d\omega=0$ on $U$.

## Facts & Assumptions

**Given:** The stated open domain, regularity, and identity $dS=\mu\omega$.

[F1] [[def-tdmath-one-form-and-horizontal-path]]: exterior differentiation is coordinate antisymmetrized partial differentiation, and $\wedge$ is the alternating exterior product.

[F2] [[thm-chain-rule-for-total-derivatives]]: coordinate compositions with line segments obey the total-derivative chain rule.

[F3] [[thm-continuous-implies-integrable]] and [[thm-newton-leibniz-with-interior-derivative]]: continuous partial derivatives are integrable on coordinate intervals, and their interval integrals give endpoint differences.

[F4] [[thm-heine-borel-rn]] and [[thm-heine-cantor-metric]]: a closed coordinate rectangle is compact and continuous second partials on it are uniformly continuous.

## Proof

**Given:** The stated $\omega,\mu,S$; write $S_i=\partial_iS$ in Euclidean coordinates.

1.1 Fix $q\in U$ and distinct coordinates $i,j$. Choose $h,k>0$ small enough that the coordinate rectangle from $q$ to $q+he_i+ke_j$ lies in $U$, and set $\Delta=S(q+he_i+ke_j)-S(q+he_i)-S(q+ke_j)+S(q)$. By [F4] the second partials are uniformly continuous on the chosen closed rectangle. Applying [F2] to coordinate segments and [F3] to their continuous derivatives, Newton–Leibniz gives
$$\Delta=\int_0^h\!\int_0^k S_{ij}(q+se_i+te_j)\,dt\,ds=\int_0^k\!\int_0^h S_{ji}(q+se_i+te_j)\,ds\,dt.$$
Each equality follows by taking the two endpoint differences in the outer coordinate and then applying Newton–Leibniz to the inner difference; both integrands are continuous by $S\in C^2$. [F2, F3, F4]

2.1 Divide both expressions in step 1.1 by $hk$ and let $h,k\downarrow0$. Continuity of $S_{ij}$ and $S_{ji}$ makes each average tend to its value at $q$, so $S_{ij}(q)=S_{ji}(q)$. Since $q,i,j$ were arbitrary, the coordinate formula in [F1] gives $d(dS)=0$. [step 1.1, F1, F4, algebra]

3.1 Put $\lambda:=1/\mu$. Total differentiability gives $\mu(q+h)=\mu(q)+D\mu(q)h+o(\|h\|)$, and continuity with $\mu(q)\ne0$ gives $\mu(q+h)\mu(q)=\mu(q)^2+o(1)$. Hence $\lambda(q+h)-\lambda(q)=-\bigl(\mu(q+h)-\mu(q)\bigr)/\bigl(\mu(q+h)\mu(q)\bigr)=-\mu(q)^{-2}D\mu(q)h+o(\|h\|)$, so $\lambda\in C^1(U)$ with continuous derivative $D\lambda=-\mu^{-2}D\mu$. For each $i$, $S_i=\partial_i S$ is $C^1$. The increment identity $\lambda(q+h)S_i(q+h)-\lambda(q)S_i(q)=\lambda(q+h)(S_i(q+h)-S_i(q))+S_i(q)(\lambda(q+h)-\lambda(q))$ and the total derivative expansions therefore give $D(\lambda S_i)=\lambda DS_i+S_iD\lambda$. Since $\omega=\lambda dS$, for coordinates $j<k$ the coefficient of $dx_j\wedge dx_k$ in $d\omega$ is $\partial_j(\lambda S_k)-\partial_k(\lambda S_j)=(\partial_j\lambda)S_k-(\partial_k\lambda)S_j$, as the mixed partials cancel by step 2.1. Thus $d\omega=d\lambda\wedge dS$, and $\omega\wedge d\omega=\lambda\,dS\wedge d\lambda\wedge dS=0$ because the alternating product vanishes when $dS$ occurs twice. [given, step 2.1, F1, algebra] ∎
