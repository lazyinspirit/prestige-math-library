---
id: lem-it-multisource-typicality-probability
kind: lemma
title: "Joint typicality probability tends to one for a finite IID multisource"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-finite-iid-multisource
  - def-it-jointly-typical-multisource-blocks
  - lem-it-multisource-block-conditional-law-factorization
  - def-it-empirical-type-and-type-class
  - def-it-finite-conditional-entropy
  - def-finite-alphabet-iid-source
  - def-identically-distributed-and-iid-random-variables
  - lem-finite-alphabet-iid-information-aep
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets are finite and the tail bounds use finite second moments."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 15"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§15.2, jointly typical sequences and the AEP, printed pp. 520–523."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11, §11.2, AEP, printed pp. 217–218; §11.6, Slepian–Wolf, printed pp. 224–226."
---

## Statement

Let $(Z_t)_{t\ge1}$ be a finite-alphabet IID $k$-source with joint letter law $P$ on $\mathcal X=\prod_{i=1}^k\mathcal X_i$. For every $\delta,\epsilon>0$, its jointly typical set from [[def-it-jointly-typical-multisource-blocks]] satisfies
$$P^{\otimes n}\bigl(\mathcal T_n(P,\delta,\epsilon)\bigr)\longrightarrow1\qquad(n\to\infty).$$

## Facts & Assumptions

**Given:** The finite alphabets, the IID vector source, and $\delta,\epsilon>0$.

[F1] [[def-it-finite-iid-multisource]]: $Z_t$ are IID with law $P$, and every $n$-block has law $P^{\otimes n}$.

[F2] [[def-it-jointly-typical-multisource-blocks]]: membership requires support, empirical-coordinate, full-information, and every nonempty-subset conditional-information bounds.

[F3] [[def-it-empirical-type-and-type-class]]: $\widehat P_{z^n}(a)=n^{-1}\sum_{t=1}^n\mathbf1_{\{Z_t=a\}}$.

[F4] [[def-identically-distributed-and-iid-random-variables]]: an IID family is mutually independent and identically distributed; applying the same measurable finite-valued function to each coordinate preserves these properties by inverse images.

[F5] [[lem-finite-alphabet-iid-information-aep]]: for the vector source, $P(|I_n(Z^n)-H(P)|\ge\epsilon)\le V(P)/(n\epsilon^2)$, with finite surprisal variance $V(P)$.

[F6] [[def-it-finite-conditional-entropy]]: $H_P(X_S\mid X_{S^c})=\sum_{c:P_{X_{S^c}}(c)>0}P_{X_{S^c}}(c)H(P_{X_S\mid c})$.

[F7] [[lem-it-multisource-block-conditional-law-factorization]]: for a supported block, $P^{\otimes n}(x_S^n\mid x_{S^c}^n)=\prod_{t=1}^nP_{X_S\mid X_{S^c}}(x_{S,t}\mid x_{S^c,t})$.

[F8] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite entropy is $H(r)=-\sum_{a:r(a)>0}r(a)\ln r(a)$.

## Proof

1.1 Fix $a\in\mathcal X$ and put $B_{t,a}:=\mathbf1_{\{Z_t=a\}}$. For any distinct $t_1,\ldots,t_r$ and sets $E_j\subseteq\{0,1\}$, $\bigcap_j\{B_{t_j,a}\in E_j\}=\bigcap_j\{Z_{t_j}\in\phi_a^{-1}(E_j)\}$, where $\phi_a(z)=\mathbf1_{\{z=a\}}$. Mutual independence in [F1, F4] factors the probability of this intersection, and the common law $P$ gives every $B_{t,a}$ the same distribution; hence $(B_{t,a})$ are IID. Their mean is $P(a)$ and variance is $P(a)(1-P(a))\le1/4$. Their sample mean is $\widehat P_{Z^n}(a)$ by [F3]. Independence gives $\mathbb E[(\widehat P_{Z^n}(a)-P(a))^2]=\operatorname{Var}(B_{1,a})/n\le1/(4n)$; since a square is at least $\delta^2$ on the event of deviation at least $\delta$, that event has probability at most $1/(4n\delta^2)$. If $P(a)=0$, the probability that $a$ occurs at any of the first $n$ positions is zero. A union bound over the finite alphabet proves that the support and empirical-coordinate requirements in [F2] fail with probability at most $|\mathcal X|/(4n\delta^2)$. [F1, F2, F3, F4, algebra]

1.2 By [F5], the full-information requirement in [F2] fails with probability at most $V(P)/(n\epsilon^2)$. [F2, F5]

1.3 Fix a nonempty $S\subseteq[k]$ and write $C=S^c$. On the support of $P$, define $W_t^S:=-\ln P_{X_S\mid X_C}(X_{S,t}\mid X_{C,t})$, and set it to $0$ off the support. This is a finite-valued function $\psi_S(Z_t)$. For distinct $t_1,\ldots,t_r$ and Borel sets $B_1,\ldots,B_r$, $\bigcap_j\{W_{t_j}^S\in B_j\}=\bigcap_j\{Z_{t_j}\in\psi_S^{-1}(B_j)\}$; [F1, F4] therefore give mutual independence and a common law, so $(W_t^S)$ are IID. Its mean is $H_P(X_S\mid X_C)$ by the finite sum in [F6] and the zero-term convention in [F8], and its variance $\sigma_S^2$ is finite because its range is finite. By [F7], $J_{S,n}=n^{-1}\sum_{t=1}^nW_t^S$ almost surely. Independence gives $\mathbb E[(J_{S,n}-H_P(X_S\mid X_C))^2]=\sigma_S^2/n$, so the same squared-deviation argument bounds failure of this conditional requirement by $\sigma_S^2/(n\epsilon^2)$. [F1, F4, F6, F7, F8, algebra]

2.1 There are finitely many symbols and finitely many nonempty subsets $S$. The union bound over the failure events in steps 1.1, 1.2, and 1.3 is at most $\frac{|\mathcal X|}{4n\delta^2}+\frac{V(P)+\sum_{\varnothing\ne S\subseteq[k]}\sigma_S^2}{n\epsilon^2}$, which tends to zero. Its complement is exactly the event in the Statement, proving the claimed limit. [F2, step 1.1, step 1.2, step 1.3, algebra] ∎
