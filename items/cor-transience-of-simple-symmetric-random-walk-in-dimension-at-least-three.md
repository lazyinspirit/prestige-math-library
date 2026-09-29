---
id: cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three
kind: corollary
title: "Higher-dimensional simple symmetric walks are transient"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-simple-symmetric-walk-on-zd
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-matrix-chapman-kolmogorov-equations
  - def-measure-kernel-and-probability-kernel
  - def-measurable-function-between-measurable-spaces
  - prop-dirac-measure-is-a-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
  - cor-canonical-markov-chain-on-path-space
  - def-initial-distribution-of-a-markov-chain
  - thm-rationals-countable
  - lem-finite-powers-of-countable-sets-are-countable
  - lem-finite-subsets-listable
  - def-recurrent-and-transient-state
  - thm-recurrence-transience-equivalent-criteria
  - thm-real-stirling-formula
  - cor-central-binomial-coefficient-asymptotic-from-wallis
  - def-multinomial-coefficient
  - thm-multinomial-theorem
  - thm-weighted-am-gm-real
  - thm-p-series-rational
  - thm-direct-comparison-test
proof_strategy: direct
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§5.4, Example 5.4.2 and the complete d=3 proof of Theorem 5.4.4, printed pp. 288–290. The source counts balanced direction words, factors the return probability into a central-binomial term and a squared multinomial probability, bounds the square sum by the largest mass, and uses Stirling at balanced counts; it handles d>3 by the three-coordinate skeleton. The item generalizes the coefficient estimate directly to every fixed d≥3 and uses the library's statewise Green-series criterion; no local CLT is used."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). For every integer $d\ge3$, define the
probability kernel on $(\mathbb Z^d,2^{\mathbb Z^d})$ by
$$K_d(z,A)=\frac1{2d}\sum_{j=1}^{d} \bigl(\delta_{z+e_j}(A)+\delta_{z-e_j}(A)\bigr),$$
where $e_1,\ldots,e_d$ are the standard basis vectors of $\mathbb Z^d$. For each $x\in\mathbb Z^d$,
let $\mathbb P_x$ be the canonical path-space chain law with initial measure
$\delta_x$ and transition kernel $K_d$. Then every state $x\in\mathbb Z^d$ is
transient for this simple symmetric nearest-neighbor walk.

## Facts & Assumptions

**Given:** AC, an integer $d\ge3$, the lattice $\mathbb Z^d$, the kernel $K_d$, and a fixed initial state $x\in\mathbb Z^d$.

[A1] AC is assumed for the canonical path-space law and the statewise recurrence criterion used below. ([[def-axiom-of-choice]])

[F1] A Dirac set function is a probability measure; finite nonnegative weighted sums of measures are measures. ([[prop-dirac-measure-is-a-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]])

[F2] A probability kernel is a measure in the target variable for each source point, has total mass one, and is measurable in the source point for each measurable target set. ([[def-measure-kernel-and-probability-kernel]])

[F3] From any probability measure and probability kernel, AC supplies a unique canonical path-space law whose coordinates form the corresponding homogeneous Markov chain. ([[cor-canonical-markov-chain-on-path-space]])

[F4] With initial measure $\delta_x$, write $\mathbb P_x$ for the specified deterministic-start chain law. ([[def-initial-distribution-of-a-markov-chain]])

[F5] The simple symmetric walk has one-step matrix $p(z,z+e_j)=p(z,z-e_j)=1/(2d)$ for $j=1,\ldots,d$ and zero elsewhere; each row sums to one. ([[def-simple-symmetric-walk-on-zd]])

[F6] The matrix probabilities are $p(z,w)=K_d(z,\{w\})$ and $p^{(n)}(z,w)=K_d^n(z,\{w\})$, with $p^{(0)}(z,w)=\mathbf1_{\{z=w\}}$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F7] Matrix Chapman–Kolmogorov holds: $$p^{(m+n)}(z,w)=\sum_{v\in\mathbb Z^d}p^{(m)}(z,v)p^{(n)}(v,w).$$ ([[lem-matrix-chapman-kolmogorov-equations]])

[F8] $\mathbb Z$ is at most countable: it is a surjective image of $\mathbb N\times\mathbb N$. ([[thm-rationals-countable]], Remark)

[F9] Every finite power of an at most countable set is at most countable. ([[lem-finite-powers-of-countable-sets-are-countable]])

[F10] For $a=(a_1,\ldots,a_d)\in\mathcal W(n,d)$, the multinomial coefficient counts ordered blocks of sizes $a_1,\ldots,a_d$, and $$\binom{n}{a_1,\ldots,a_d}\prod_{j=1}^{d}a_j!=n!.$$ The multinomial expansion holds for real variables. ([[def-multinomial-coefficient]], [[thm-multinomial-theorem]])

[F11] If positive reals $u_j$ have nonnegative real weights $r_j$ summing to one, then $\prod_j u_j^{r_j}\le\sum_j r_ju_j$. ([[thm-weighted-am-gm-real]])

[F12] Stirling's formula gives $$\frac{m!}{\sqrt{2\pi m}(m/e)^m}\longrightarrow1\quad(m\to\infty).$$ ([[thm-real-stirling-formula]])

[F13] For $n\ge1$, if $b_n=4^{-n}\binom{2n}{n}$, then $\sqrt{\pi n}\,b_n\to1$. ([[cor-central-binomial-coefficient-asymptotic-from-wallis]])

[F14] Every nonempty finite subset of $\mathbb R$ has a maximum and minimum. ([[lem-finite-subsets-listable]])

[F15] For rational $s>1$, the series $\sum_{n\ge1}n^{-s}$ converges. ([[thm-p-series-rational]])

[F16] If nonnegative terms are eventually bounded above by terms of a convergent series, their series converges. ([[thm-direct-comparison-test]])

[F17] For every specified chain law, $\mathbb P_x(T_x^+<\infty)=1$ means $x$ is recurrent, while $\mathbb P_x(T_x^+<\infty)<1$ means it is transient; these alternatives exhaust all states. ([[def-recurrent-and-transient-state]])

[F18] Under AC, recurrence of a fixed state is equivalent to divergence of its return Green series: $$x\text{ recurrent}\quad\Longleftrightarrow\quad \sum_{n=0}^{\infty}p^{(n)}(x,x)=\infty.$$ ([[thm-recurrence-transience-equivalent-criteria]])

## Proof

**Proof technique:** count return paths, estimate the maximum multinomial probability by Stirling's formula, and apply the Green-series criterion.

1.1 For fixed $z$, $K_d(z,\cdot)$ is the finite weighted sum of the $2d$ Dirac probability measures at $z\pm e_j$, $1\le j\le d$, with coefficient $1/(2d)$. By [F1] it is a measure, and its total mass is $2d/(2d)=1$. For fixed $A\subseteq \mathbb Z^d$, the function $z\mapsto K_d(z,A)$ is measurable because the source sigma-algebra is the full power set. Thus [F2] makes $K_d$ a probability kernel. The vectors $z\pm e_j$ are pairwise distinct, so its transition matrix is exactly [F5]. [F1, F2, F5, given]
1.2 By [F3], [F4], and [A1], for each fixed $x$ there is a canonical Markov chain law with this matrix and initial state $x$. Also [F8] and [F9] show that its state space $\mathbb Z^d$ is at most countable, as required by [F18]. The law is unique for each $x$, so no family of laws is selected by choice. [A1, F3, F4, F8, F9, given]
1.3 Repeatedly apply [F7] to the finite-support one-step rows. Induction on the number of steps expands $p^{(n)}(0,0)$ as the sum of the probabilities of all length-$n$ move words that start and end at $0$; each such word has probability equal to the product of its one-step entries [F5]. At every finite time only finitely many words occur, since there are $2d$ choices at each step. In particular, a return after an odd number of steps is impossible: each move changes the parity of the sum of the coordinates. [F5, F6, F7, given]
1.4 Fix $n\ge1$ and let $\mathcal W_{n,d}=\{a=(a_1,\ldots,a_d)\in\mathbb N^d: \textstyle\sum_{j=1}^{d}a_j=n\}.$ For $a\in\mathcal W_{n,d}$ define $q_n(a)=d^{-n}\binom{n}{a_1,\ldots,a_d} =\frac{n!}{d^n\prod_{j=1}^{d}a_j!},$ where the second equality follows from [F10]. By the real multinomial expansion [F10], evaluating all $d$ variables at $1/d$ gives $\sum_{a\in\mathcal W_{n,d}}q_n(a)=1.$ The index set is finite by [F10], and each $q_n(a)>0$. [F10, given]
2.1 The maximum $M_n:=\max_{a\in\mathcal W_{n,d}}q_n(a)$ exists by [F10] and [F14]; the set is nonempty, for example $(n,0,\ldots,0)$ belongs to it. If $a_i\ge a_j+2$ for coordinates $1\le i,j\le d$, transferring one unit from coordinate $i$ to coordinate $j$ produces $a'=a-e_i+e_j\in\mathcal W_{n,d}$ and $\frac{q_n(a')}{q_n(a)}=\frac{a_i}{a_j+1}>1.$ Consequently any maximizing tuple has coordinates differing by at most one. Writing $n=dm+r$ with $0\le r<d$, such a tuple has $r$ coordinates equal to $m+1$ and the others equal to $m$; all such tuples have the same value. [F10, F14, step 1.4, given]
2.2 A $2n$-step word returns to zero exactly when, for each coordinate $1\le j\le d$, it uses $+e_j$ and $-e_j$ equally often. Write their common count as $a_j$; then $a\in\mathcal W_{n,d}$. For fixed $a$, the number of words is the multinomial coefficient with the $2d$ category counts $(a_1,a_1,\ldots,a_d,a_d)$, so [F10] and [F5] give its return probability as $\frac{(2n)!}{(2d)^{2n}\prod_{j=1}^{d}(a_j!)^2}.$ Summing over $a$ and using the definition of $q_n$ yields $p^{(2n)}(0,0)=b_n\sum_{a\in\mathcal W_{n,d}}q_n(a)^2, \qquad b_n=4^{-n}\binom{2n}{n}.$ Indeed, each summand on the right is $4^{-n}\frac{(2n)!}{(n!)^2} \frac{(n!)^2}{d^{2n}\prod_{j=1}^{d}(a_j!)^2} =\frac{(2n)!}{(2d)^{2n}\prod_{j=1}^{d}(a_j!)^2},$ the word probability just computed. [F5, F7, F10, step 1.3, step 1.4, given, algebra]
3.1 The limit in [F12], and positivity of its terms for $m\ge1$, imply constants $c,C>0$ such that for every integer $m\ge1$, $c\sqrt m(m/e)^m\le m!\le C\sqrt m(m/e)^m.$ For fixed $d$ and $n\ge2d$, a balanced tuple has every coordinate $a_j\ge n/(2d)>0$. Put $r_j=a_j/n$ for $1\le j\le d$. These positive weights sum to one; applying weighted AM–GM [F11] to $u_j=1/(d r_j)$ gives $\prod_{j=1}^{d}\left(\frac{1}{d r_j}\right)^{r_j} \le\sum_{j=1}^{d}\frac{r_j}{d r_j}=1,$ and raising to the $n$th power yields $\frac{n^n}{d^n\prod_{j=1}^{d}a_j^{a_j}} =\prod_{j=1}^{d}\left(\frac{1}{d r_j}\right)^{a_j}\le1.$ Use the upper Stirling bound for $n!$ and the lower one for each $a_j!$ in the factorial formula for $q_n$. Since $\sum_{j=1}^{d}a_j=n$, the exponential factors cancel, and the last display gives $M_n\le\frac{C}{c^d}\frac{\sqrt n}{\prod_{j=1}^{d}\sqrt{a_j}} \le\frac{C}{c^d}(2d)^{d/2}n^{-(d-1)/2}.$ For $1\le n<2d$, [F10] gives $M_n\le1$; increasing the constant therefore produces $C_d>0$ with $M_n\le C_dn^{-(d-1)/2}\qquad(n\ge1).$ Here $C_d$ may depend on the fixed dimension $d$. [F10, F11, F12, step 2.1, step 1.4, given, algebra]
4.1 Since $0\le q_n(a)\le M_n$, normalization [step 1.4] gives $\sum_{a\in\mathcal W_{n,d}}q_n(a)^2 \le M_n\sum_{a\in\mathcal W_{n,d}}q_n(a)=M_n.$ By [F13] there is a constant $C_0$ with $b_n\le C_0n^{-1/2}$ for all $n\ge1$. Combining the return factorization, the bound from step 3.1, and the square-sum estimate just proved, there is a constant $D_d>0$ such that $0\le p^{(2n)}(0,0)\le D_dn^{-d/2}\qquad(n\ge1).$ The odd-time return probabilities vanish by step 1.3. [F13, step 1.3, step 1.4, step 3.1, step 2.2, algebra]
5.1 For fixed integer $d\ge3$, the rational exponent $d/2$ exceeds one, so [F15] gives convergence of $\sum_{n\ge1}n^{-d/2}$. The comparison theorem [F16] and step 4.1 show that $\sum_{n=0}^{\infty}p^{(n)}(0,0) =1+\sum_{n=1}^{\infty}p^{(2n)}(0,0)<\infty.$ The initial term is one by [F6]. [F6, F15, F16, step 1.3, step 4.1, algebra]
6.1 The Green-series criterion [F18] implies that $0$ is not recurrent; [F17] gives the exhaustive recurrent/transient alternatives, so $0$ is transient. For every $x\in\mathbb Z^d$, translation by $x$ is a probability-preserving bijection from the finite move words from $0$ back to $0$ to the words from $x$ back to $x$. Therefore $p^{(n)}(x,x)=p^{(n)}(0,0)$ for every $n$, and the same finite Green-series criterion makes each $x$ transient. [F5, F6, F17, F18, step 1.3, step 5.1, given]
7.1 The time-zero return contributes exactly one; all odd positive returns have probability zero; and the estimates apply at the threshold $d=3$, where the bounding exponent is $3/2$. The constant $D_d$ is allowed to depend on fixed $d$, so no uniform-in-d claim is made. AC [A1] is used for the canonical chain law and recurrence criterion; the path counting, finite maximization, and translation argument require no choice. The assertion is one-way, not an iff statement. [A1, F3, F6, F17, F18, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 2.2, step 4.1, step 5.1, step 6.1, given] ∎
## Source notes

Durrett, §5.4, Example 5.4.2 and the complete proof of Theorem 5.4.4, printed pp. 288–290 (official fifth-edition PDF at https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf). The theorem states the same transience classification. Its proof counts the d=3 return words, writes the return probability as a central-binomial factor times a sum of squared multinomial masses, bounds that sum by the largest mass, locates the maximum at balanced counts, and uses Stirling's formula for an $O(n^{-1})$ maximum mass. It then handles $d>3$ using the embedded three-coordinate walk. The proof here extends the coefficient calculation to each fixed $d\ge3$ by weighted AM–GM and the Stirling ratio, and applies the already authored statewise Green-series criterion. The source passage does not prove this all-d coefficient estimate, and no local central limit theorem is used.
