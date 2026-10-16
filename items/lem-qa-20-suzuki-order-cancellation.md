---
id: lem-qa-20-suzuki-order-cancellation
kind: lemma
title: Suzuki recursive cancellation of error terms
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-20-suzuki-recursive-product-formula
  - def-qa-20-symmetric-second-order-formula
  - def-qa-20-term-list-access-model
  - def-qa-19-finite-matrix-dynamics
  - thm-qa-19-matrix-exponential-unitary-properties
  - thm-nth-roots-exist
  - lem-power-monotone
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.3, printed p. 135: higher-order product-formula asymptotics; no recursive cancellation proof is supplied."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.2, printed pp. 72–74: first-order error scaling and higher-order context; Chapter 9, Exercise 4, printed p. 79: the second-order local-error fact. No higher-order recursive cancellation proof is supplied."
---

## Statement

Let $H_1,\ldots,H_m$ be fixed finite-dimensional self-adjoint matrices, $m\ge1$, and let $U(h)=e^{-ih\sum_jH_j}$. The recursive formulas $S_{2k}$ of [[alg-qa-20-suzuki-recursive-product-formula]] have the same Taylor coefficients as $U(h)$ through degree $2k$ at $h=0$. They are symmetric: $S_{2k}(-h)=S_{2k}(h)^{-1}$ for all real $h$.

## Facts & Assumptions

**Given:** Finite-dimensional self-adjoint terms $H_1,\ldots,H_m$, $m\ge1$, and the recursive formulas $S_{2k}$.

[L1] In this proof, $R(h)=O(h^a)$ means there are constants $C,\delta>0$ with $\|R(h)\|\le C|h|^a$ whenever $|h|<\delta$.

[L2] Repeatedly differentiating $U_K'(h)=-iKU_K(h)$ from [F3] gives $U_K^{(n)}(h)=(-iK)^nU_K(h)$ for every $n\ge0$. The product rule gives continuous derivatives of every order for each finite formula word, so Taylor expansions below hold with operator-norm remainders to every stated finite order.

[F1] [[def-qa-20-symmetric-second-order-formula]] gives the palindromic base product $S_2(h)$.

[F2] [[alg-qa-20-suzuki-recursive-product-formula]] defines $p_j=(4-4^{1/(2j-1)})^{-1}$ and the five-copy recursion with coefficients $p_j,p_j,1-4p_j,p_j,p_j$.

[F3] [[thm-qa-19-matrix-exponential-unitary-properties]] gives the unitary, differentiability, and time-composition identities for each finite self-adjoint term.

[F4] [[def-qa-19-finite-matrix-dynamics]] defines $U_K(h)$ by the finite spectral functional calculus.

[F5] [[def-qa-20-term-list-access-model]] permits signed exact time codes built from rational numbers and the positive roots used in the Suzuki coefficients.

[F6] [[thm-nth-roots-exist]] gives the unique nonnegative real $q$-th root of $4$ for every integer $q\ge1$.

[F7] [[lem-power-monotone]] states that $x\mapsto x^q$ is increasing on the nonnegative reals and that $4^q>4$ for $q>1$.

## Proof



1.1 Put $A_j=-iH_j$ and $A=\sum_jA_j$. The base word $S_2(h)$ is palindromic by [F1], so [F3] gives $S_2(-h)=S_2(h)^{-1}$; the same identity holds for $U(h)$ by [F3] and [F4]. Its derivative at zero is $A$, because the two half-time occurrences of every outer $A_j$ sum to one full occurrence, while the middle term occurs once. Also $U(0)=S_2(0)=I$. By [L2], $E(h)=S_2(h)-U(h)=Ch^2+O(h^3)$ for some matrix $C$. The inverse identities imply $E(-h)=-S_2(h)^{-1}E(h)U(h)^{-1}$; comparing degree-two terms gives $C=-C$, hence $C=0$. Thus $E(h)=O(h^3)$, proving the base order-two claim as well as the symmetry base case. [given, F1, F3, F4, L1, L2, algebra, base]

1.2 Fix $j\ge2$ and assume as the induction hypothesis [ih] that $S_{2j-2}(-h)=S_{2j-2}(h)^{-1}$ and that $S_{2j-2}$ agrees with $U$ through degree $2j-2$. Put $q=2j-1$, $p=p_j$, and $c=1-4p$. By [L2] and Taylor's theorem, $S_{2j-2}(h)-U(h)=Eh^q+O(h^{q+1})$. By [F6], the unique nonnegative root $\rho_q$ with $\rho_q^q=4$ exists; it is positive because zero has zero $q$-th power. Since $q\ge3$, [F7] gives $\rho_q<4$: otherwise $\rho_q^q\ge4^q>4$, contradicting $\rho_q^q=4$. Thus $p=(4-\rho_q)^{-1}>1/4$ and $c=1-4p=-\rho_qp<0$. The five scaled copies in [F2] have leading error coefficients $p^qE,p^qE,c^qE,p^qE,p^qE$. Their other factors equal $I+O(h)$, so multiplying an error term by those factors changes it only by $O(h^{q+1})$. The ideal factors $U(ph)^2U(ch)U(ph)^2$ equal $U((4p+c)h)=U(h)$ by [F3]. The coefficient $c$ is an expression in the rational and positive-root tokens of [F5], so the signed call has a finite exact code. Hence the coefficient of $h^q$ in $S_{2j}(h)-U(h)$ is $(4p^q+c^q)E$. Since $c=-\rho_qp$ and $\rho_q^q=4$, $c^q=-4p^q$, so this coefficient vanishes and the difference is $O(h^{q+1})=O(h^{2j})$. [ih, F2, F3, F5, F6, F7, L1, L2, algebra]

2.1 Let $A(h)=S_{2j-2}(ph)$ and $B(h)=S_{2j-2}(ch)$. The recursive word is $A(h)A(h)B(h)A(h)A(h)$. The induction hypothesis in step 1.2 gives inverse symmetry for $A$ and $B$; reversing the five factors shows $S_{2j}(-h)=S_{2j}(h)^{-1}$. Also $U(-h)=U(h)^{-1}$. By step 1.2 and [L2], write $S_{2j}(h)-U(h)=Dh^{2j}+O(h^{2j+1})$. The inverse identity gives $Dh^{2j}=-Dh^{2j}+O(h^{2j+1})$, hence $D=0$ and the difference is $O(h^{2j+1})$. Therefore $S_{2j}$ agrees with $U$ through degree $2j$ and has inverse symmetry. Together with the base case in step 1.1, induction proves both claims for every finite $k$. [step 1.1, step 1.2, F2, F3, L1, L2, algebra, discharge-induction] ∎
