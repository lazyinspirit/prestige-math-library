---
id: thm-ionescu-tulcea-construction-of-a-markov-chain
kind: theorem
title: "Ionescu-Tulcea construction of a Markov chain"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-measure-kernel-and-probability-kernel, thm-measurability-of-integration-against-a-kernel, thm-sections-of-product-measurable-functions-are-measurable, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined, def-premeasure-on-an-algebra, thm-caratheodory-extension-theorem, thm-monotone-class, thm-dynkin-pi-lambda, def-time-homogeneous-markov-chain-with-transition-kernel]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Shalizi, Building Infinite Processes from Finite-Dimensional Distributions, Theorem 33"
      url: "https://www.stat.cmu.edu/~cshalizi/754/2006/notes/lecture-03.pdf"
      locator: "Theorem 33 and complete proof, all 5 PDF pages; course pp. 22-24"
    - title: "Durrett, Probability: Theory and Examples, Section 5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Theorem 5.1.1, printed pp. 268-269"
---

## Statement

Assume Choice. Let $(E_n,\mathcal E_n)_{n\ge0}$ be measurable spaces, let
$\mu_0$ be a probability measure on $E_0$, and, for each $n\ge0$, let $K_n$ be
a probability kernel from $E_0\times\cdots\times E_n$ to $E_{n+1}$. There is a
unique probability measure $P$ on
$$ \left(\prod_{n\ge0}E_n,\ \bigotimes_{n\ge0}\mathcal E_n\right) $$ whose finite-prefix laws are the prescribed iterated integrals $$ \mu_0(dx_0)K_0(x_0,dx_1)K_1(x_0,x_1,dx_2)\cdots K_{r-1}(x_0,\ldots,x_{r-1},dx_r). $$
In particular, if every $E_n=E$ and
$K_n(x_0,\ldots,x_n,A)=K(x_n,A)$, the coordinate process is a homogeneous
$K$-chain with initial law $\mu_0$.

## Facts & Assumptions

**Given:** Choice, the measurable spaces, initial probability, and history-dependent probability kernels in the statement.

[F1] Integration of a nonnegative jointly measurable function against a finite kernel is measurable in the source variable. ([[thm-measurability-of-integration-against-a-kernel]])

[F2] A consistent family of finite-dimensional laws on a nonempty product gives a well-defined finitely additive cylinder law. ([[lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined]])

[F3] A premeasure is countably additive for every disjoint algebra sequence whose union remains in the algebra. ([[def-premeasure-on-an-algebra]])

[F4] Under countable choice, the Caratheodory construction extends a premeasure to its generated sigma-algebra. ([[thm-caratheodory-extension-theorem]])

[F5] Dominated convergence passes pointwise bounded limits under an integral. ([[thm-dominated-convergence]])

[F6] Probability measures agreeing on a generating pi-system agree everywhere. ([[thm-dynkin-pi-lambda]])

[F7] A homogeneous Markov chain is defined by the conditional one-step kernel identity. ([[def-time-homogeneous-markov-chain-with-transition-kernel]])

[F8] Monotone convergence passes increasing nonnegative limits through each integral. ([[thm-monotone-convergence-for-the-integral]])

## Proof

1.1 Construct prefix probabilities recursively. Given $\mu_n$ on [F1] $E_0\times\cdots\times E_n$, define $$ \mu_{n+1}(A)=\int K_n(x_0,\ldots,x_n,A_{(x_0,\ldots,x_n)})\,d\mu_n. $$ The integrand is measurable by [F1]. For disjoint $A_j$, sectionwise countable additivity and [F8] move the increasing partial sums through the outer integral; the empty set has mass $0$ and the whole product has mass $1$. Thus $\mu_{n+1}$ is a probability measure. Since $K_n(x,E_{n+1})=1$, its marginal on the first $n+1$ coordinates is $\mu_n$. Induction gives consistent prefix laws and hence consistent laws for arbitrary finite coordinate sets by marginalization. [F1, F8]

2.1 The spaces are nonempty along a compatible history: $\mu_0(E_0)=1$, and a [F2, step 1.1] probability section of each $K_n$ has nonempty target. Choice supplies one compatible infinite coordinate sequence. Together with the prefix construction in step 1.1, this shows the product is nonempty and [F2] defines a finitely additive probability $P_0$ on the cylinder algebra $\mathcal A$. [F2, step 1.1]

3.1 Starting from the cylinder law in step 2.1, we prove continuity at the empty set, the missing premeasure condition. Let [F1, F5, step 2.1] $C_j\downarrow\varnothing$ be cylinders and suppose instead that $P_0(C_j)\downarrow a>0$. Represent $C_j$ using the first $r_j+1$ coordinates, enlarging so that $r_j$ increases. For a prefix $x^{(k)}=(x_0,\ldots,x_k)$ and $j$ with $r_j\ge k$, let $p_j^{(k)}(x^{(k)})$ be the probability, under the remaining kernels through time $r_j$, that the completed prefix lies in $C_j$. These functions are measurable by repeated [F1], lie in $[0,1]$, and decrease in $j$. Put $m_k=\lim_jp_j^{(k)}$. Dominated convergence [F5] gives the recursion $$ m_k(x^{(k)})=\int m_{k+1}(x^{(k)},y)K_k(x^{(k)},dy), $$ while another use of [F5] gives $a=\int m_0(x_0)\mu_0(dx_0)$. [F1, F5, step 2.1]

4.1 Since $a>0$, some $x_0$ has $m_0(x_0)>0$. Whenever [step 3.1] $m_k(x^{(k)})>0$, the recursion in step 3.1 implies that some $x_{k+1}$ has $m_{k+1}(x^{(k)},x_{k+1})>0$. Choice selects these coordinates recursively. For fixed $j$, once the selected prefix reaches $r_j$, monotonicity gives $$ 0<m_{r_j}(x^{(r_j)})\le p_j^{(r_j)}(x^{(r_j)})=1_{C_j}(x^{(r_j)}). $$ Thus the selected infinite point belongs to every $C_j$, contradicting their empty intersection. Therefore $P_0(C_j)\downarrow0$. This is the exact nonempty-choice use in the proof; no compactness or tail measure is assumed. [step 3.1]

5.1 If disjoint cylinders $A_j$ have cylinder union $A$, then [F3, F4, step 4.1] $R_N=A\setminus\bigcup_{j<N}A_j$ is a decreasing cylinder sequence with empty intersection. Finite additivity and step 4.1 give $$P_0(A)=\sum_{j<N}P_0(A_j)+P_0(R_N)\longrightarrow\sum_jP_0(A_j).$$ Hence, by [F3], $P_0$ is a finite premeasure. Since Choice implies countable choice, [F4] extends it to a probability $P$ on the product sigma-algebra. [F3, F4, step 4.1]

6.1 If $P'$ is another extension, it agrees with $P$ on every cylinder by the [F6, step 5.1] prescribed finite laws. Cylinders form a pi-system containing the whole product and generate the product sigma-algebra, so [F6] gives $P'=P$. This also handles zero cylinder events and the total-mass-one cylinder. [F6, step 5.1]

7.1 Under the probability $P$ constructed and identified in step 6.1, in the homogeneous last-coordinate specialization, let [F7, step 1.1, step 6.1] $\mathcal F_n=\sigma(X_0,\ldots,X_n)$. The recursive prefix law in step 1.1 says for every $B\in\mathcal F_n$ and $A\in\mathcal E$ that $$ \mathbb E_P[1_B1_{\{X_{n+1}\in A\}}] =\mathbb E_P[1_BK(X_n,A)]. $$ The right-hand random variable is $\mathcal F_n$-measurable, so it is the conditional probability. Hence [F7] says that the coordinates form the homogeneous Markov chain and they have initial law $\mu_0$. [F7, step 1.1, step 6.1] ∎
