---
id: thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion
aliases: [ nrqm-fock-and-equilibrium-countable-mode-product-criterion ]
kind: theorem
domain: mathematics
title: "Countable-mode product criterion"
status: published
origin: pipeline
dependency_level: 9
deps:
  [
    def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis,
    thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction,
    lem-nrqm-fock-and-equilibrium-fock-sector-projections,
    thm-nrqm-fock-and-equilibrium-number-operator-domain,
    thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-permutation-sector-projections,
    lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma,
    thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set,
    def-trace-class-operator,
    def-trace-of-a-trace-class-operator,
    thm-geometric-series,
    thm-tonelli-for-nonnegative-double-series,
    thm-monotonicity-of-the-integral,
    def-natural-logarithm,
    thm-logarithm-derivative-and-integral,
    def-complex-exponential,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-operator-norm,
    def-countable-choice,
    def-axiom-of-choice,
    thm-monotone-convergence,
    thm-natural-logarithm-laws,
    thm-trace-is-absolutely-convergent-and-basis-independent,
    lem-finite-rank-operators-are-compact,
    lem-nuclear-series-characterizes-trace-norm,
    thm-norm-limit-of-compact-operators-is-compact
  ]
dependency_roles:
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-tonelli-for-nonnegative-double-series: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-monotone-convergence: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Sections 1.2-1.4 pp. 5-9 and Section 4.1 p. 25 (Fock space,
        second quantization, ideal Bose gas partition sums)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics
        (HSE, 2023), Section 1.4 pp. 33-37 (ideal Bose gas: single-mode
        geometric sums, occupation numbers and the condensate criterion)"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H$ be a complex
Hilbert space with a countable complete orthonormal family $(e_j)_{j\ge1}$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]),
let $(\varepsilon_j)_{j\ge1}\subseteq(0,\infty)$, let $\beta>0$, and let
$F(H)$ be the Fock space of
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]. Let
$\mathcal M$ be the set of finite nondecreasing sequences
$I=(j_1\le\cdots\le j_n)$ with $n\ge0$ (the empty sequence included); for
$I=(j_1\le\cdots\le j_n)$ put
$$v_I:=P_+^{(n)}(e_{j_1}\otimes\cdots\otimes e_{j_n})\in F(H)\quad(n\ge1),\qquad v_{\varnothing}:=\Omega,\qquad \lambda_I:=\varepsilon_{j_1}+\cdots+\varepsilon_{j_n}\ (\text{empty sum }0),$$
and $u_I:=v_I/\|v_I\|$. Then:

(a) $(u_I)_{I\in\mathcal M}$ is a complete orthonormal family of $F(H)$
([[def-hilbert-space]]);

(b) the diagonal operator
$$D(D_\beta):=\Bigl\{\psi\in F(H):\sum_{I\in\mathcal M}e^{-2\beta\lambda_I}|\langle\psi,u_I\rangle|^2<\infty\Bigr\},\qquad D_\beta\psi:=\sum_{I}e^{-\beta\lambda_I}\langle\psi,u_I\rangle u_I$$
is bounded, self-adjoint and positive with $\|D_\beta\|\le1$; it is trace class
exactly when $\sum_{I}e^{-\beta\lambda_I}<\infty$, and then
$\operatorname{tr}D_\beta=\sum_Ie^{-\beta\lambda_I}$
([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]]);

(c) for every $N\ge1$, $\displaystyle\sum_{\substack{I\in\mathcal M\\ I\subseteq\{1,\dots,N\}}}e^{-\beta\lambda_I}=\prod_{j=1}^N\frac1{1-e^{-\beta\varepsilon_j}}$, and
$$\sum_{I\in\mathcal M}e^{-\beta\lambda_I}=\lim_{N\to\infty}\prod_{j=1}^N\frac1{1-e^{-\beta\varepsilon_j}}\in(0,\infty];$$

(d) *product criterion*: $\sum_{I}e^{-\beta\lambda_I}<\infty$ if and only if
$\sum_{j\ge1}e^{-\beta\varepsilon_j}<\infty$, and in that case
$$\sum_{I\in\mathcal M}e^{-\beta\lambda_I}=\prod_{j=1}^\infty\frac1{1-e^{-\beta\varepsilon_j}}<\infty ;$$

(e) consequently $D_\beta$ is trace class if and only if
$\sum_je^{-\beta\varepsilon_j}<\infty$, with the trace given by the infinite
product in (d).

The operator $D_\beta$ is a purely mathematical diagonal operator on $F(H)$;
no thermal, thermodynamic or measurement interpretation is asserted.

## Facts & Assumptions
**Given:** a complex Hilbert space $H$ with countable complete orthonormal family $(e_j)_{j\ge1}$, positive numbers $\varepsilon_j$ and $\beta$, the Fock space $F(H)$ with tensor powers $H^{\otimes n}$ and symmetric projections $P_+^{(n)}$, the family $(u_I)_{I\in\mathcal M}$ and the numbers $\lambda_I$, and the diagonal operator $D_\beta$.

[F1] $F(H)$ is a Hilbert space; $\psi_n\in\operatorname{ran}P_+^{(n)}$; $\|\psi\|^2=\sum_n\|\psi_n\|^2$; the sectors are orthogonal ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]], [[lem-nrqm-fock-and-equilibrium-fock-sector-projections]]).

[F2] $P_+^{(n)}$ is the orthogonal projection $(1/n!)\sum_{\pi\in S_n}U_\pi$ onto the vectors fixed by all permutation unitaries; for fixed $m$ the tensor maps are isometric: $\|u_1\otimes\cdots\otimes u_m\|=\|u_1\|\cdots\|u_m\|$; the elementary tensors $e_{i_1}\otimes\cdots\otimes e_{i_n}$ over all $n$-tuples have dense linear span in $H^{\otimes n}$ ([[lem-nrqm-composites-permutation-sector-projections]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F3] The diagonal lemma: for a complete orthonormal family $(f_n)_{n\in\mathbb N}$, with $\mathbb N=\{0,1,2,\ldots\}$, of a Hilbert space and real numbers $\mu_n$, the operator with domain $\{\psi:\sum_n\mu_n^2|\langle\psi,f_n\rangle|^2<\infty\}$ and $\psi\mapsto\sum_n\mu_n\langle\psi,f_n\rangle f_n$ is self-adjoint ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]).

[F4] Once step 2.1 establishes that $(u_I)_{I\in\mathcal M}$ is a complete orthonormal family, its Fourier coefficient map has squared coefficient sum $\sum_I|\langle\psi,u_I\rangle|^2=\|\psi\|^2$ ([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]]). Bounded finite-rank operators are compact, norm limits of compact operators into a Hilbert space are compact, and a compact operator is trace class exactly when it has a nuclear representation with summable rank-one norms ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[lem-nuclear-series-characterizes-trace-norm]]).

[F5] Geometric series and nonnegative double series: $\sum_{k\ge0}q^k=1/(1-q)$ for $0\le q<1$; the order of summation of a nonnegative double series may be interchanged ([[thm-geometric-series]], [[thm-tonelli-for-nonnegative-double-series]]).

[F6] For $x\ge1$, $\log x=\int_1^xdt/t$ and $0\le\log x\le x-1$, $\log x\ge1-1/x$ ([[thm-logarithm-derivative-and-integral]], [[thm-monotonicity-of-the-integral]], [[def-natural-logarithm]]); consequently $q\le-\log(1-q)\le q/(1-q)$ for $0<q<1$ (substitute $x=1/(1-q)\ge1$).




[F7] The natural logarithm is continuous and strictly increasing on $(0,\infty)$, satisfies $\log(xy)=\log x+\log y$ and $\log(1/x)=-\log x$, and is the inverse of the strictly increasing exponential ([[thm-natural-logarithm-laws]], [[def-natural-logarithm]]).

[F8] Every nondecreasing real sequence bounded above converges to the supremum of its range ([[thm-monotone-convergence]]).

[F9] Once step 2.1 supplies the Hilbert basis $(u_I)$, the basis sum for any trace-class $T$ is absolutely convergent and equals $\operatorname{tr}T$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).
## Proof

1.1 [Orthonormality] Let $I=(j_1\le\cdots\le j_n)$, $I'=(j'_1\le\cdots\le j'_m)$ and first suppose $n=m\ge1$. Using $P_+^{(n)}=P_+^{(n)*}$ and $P_+^{(n)}\chi=\chi$ for $\chi\in\operatorname{ran}P_+^{(n)}$, [F2] gives $\langle v_I,v_{I'}\rangle=\frac1{n!}\sum_{\pi\in S_n}\langle e_{j_1}\otimes\cdots\otimes e_{j_n},U_\pi(e_{j'_1}\otimes\cdots\otimes e_{j'_n})\rangle$. Each summand is $1$ exactly when $\pi$ maps the tuple $(j'_1,\dots,j'_n)$ to $(j_1,\dots,j_n)$ and $0$ otherwise, by orthonormality of the $e_j$; since both tuples are nondecreasing, such $\pi$ exists only if $I=I'$, and then the number of such $\pi$ is the product of the factorials of the multiplicities of $I$. Hence $\langle v_I,v_{I'}\rangle=0$ for $I\ne I'$ and $\|v_I\|^2\ge1/n!>0$, so $(u_I)$ is an orthonormal family; tensors from different $n$ are orthogonal by [F1]. [F1, F2, algebra]

1.2 [Factoring the finite sums] Fix $N\ge1$. The map $I\mapsto(n_1,\dots,n_N)$ assigning to a multiset $I\subseteq\{1,\dots,N\}$ the number $n_j$ of occurrences of $j$ is a bijection onto $\mathbb N^N$, and $\lambda_I=\sum_jn_j\varepsilon_j$; by [F5] and the geometric series with $q=e^{-\beta\varepsilon_j}\in(0,1)$, $\sum_{I\subseteq\{1,\dots,N\}}e^{-\beta\lambda_I}=\sum_{(n_1,\dots,n_N)\in\mathbb N^N}\prod_{j=1}^N e^{-\beta n_j\varepsilon_j}=\prod_{j=1}^N\sum_{n\ge0}e^{-\beta n\varepsilon_j}=\prod_{j=1}^N\frac1{1-e^{-\beta\varepsilon_j}}$, the interchange of the finite product with the sums following by induction from [F5] (Tonelli for nonnegative series). [F5, algebra]

2.1 [Completeness] The ordered elementary tensors $e_{i_1}\otimes\cdots\otimes e_{i_n}$ have dense span in $H^{\otimes n}$ ([F2]); applying the bounded projection $P_+^{(n)}$ gives a dense subset of $\operatorname{ran}P_+^{(n)}$, and the vectors $P_+^{(n)}(e_{i_1}\otimes\cdots\otimes e_{i_n})$ over ordered tuples coincide with those over nondecreasing tuples because $P_+^{(n)}U_\pi=P_+^{(n)}$ ([F2]). Hence the span of $\{u_I:|I|=n\}$ is dense in $\operatorname{ran}P_+^{(n)}$; combining the sectors and using that every $\psi\in F(H)$ is the limit of its truncations ([F1]) shows that the span of all $u_I$ is dense in $F(H)$. With step 1.1 this proves (a). [F1, F2, step 1.1, algebra]

2.2 [The infinite product and the criterion] The finite sums of step 1.2 increase with $N$ because all terms are positive, and every finite multiset $I$ lies in an initial segment, so $\sum_{I\in\mathcal M}e^{-\beta\lambda_I}=\lim_N\sum_{I\subseteq\{1,\dots,N\}}e^{-\beta\lambda_I}=\lim_N\prod_{j\le N}(1-e^{-\beta\varepsilon_j})^{-1}\in(0,\infty]$. Put $q_j=e^{-\beta\varepsilon_j}\in(0,1)$. For every $j$, [F6] gives $q_j\le-\log(1-q_j)\le q_j/(1-q_j)$. If infinitely many $q_j>1/2$, both $\sum_jq_j$ and $\sum_j-\log(1-q_j)$ diverge, the latter already bounded below by the former termwise. Otherwise only finitely many such terms occur, all finite, and on the remaining tail $q_j\le-\log(1-q_j)\le2q_j$; therefore the logarithmic sum is finite exactly when $\sum_jq_j$ is finite. By the product and reciprocal laws in [F7], $\log\prod_{j\le N}(1-q_j)^{-1}=\sum_{j\le N}-\log(1-q_j)$. If these logarithmic partial sums are bounded, the increasing reciprocal products are bounded as well, since $\log$ is increasing and $\exp$ is its increasing inverse; hence [F8] gives a finite limit. Conversely, if the reciprocal products have a finite limit, they are bounded and [F7] makes their logarithmic partial sums bounded. In the finite case, if $P_N$ denotes the reciprocal partial product and $P_N\to P$, continuity of $\log$ gives $\log P=\sum_j-\log(1-q_j)$, so $P=\exp(\sum_j-\log(1-q_j))$. This proves (c) and (d) in both large-factor branches without assuming summability in advance. [F5, F6, F7, F8, step 1.2, algebra]

3.1 [The diagonal operator and the $\mathcal M$-indexed trace criterion] The set $\mathcal M$ is countably infinite: group its finite nondecreasing sequences by the integer $n+\sum_{r=1}^n j_r$, list each finite group lexicographically (its sequences have length and entries bounded by the group integer), skip empty groups, and concatenate the groups (the singleton sequences ensure infinitely many entries). Fix the resulting enumeration $I_1,I_2,\ldots$ and put $\mu_m:=e^{-\beta\lambda_{I_m}}$. Put $\mu_I:=e^{-\beta\lambda_I}$ for every $I$. By step 2.1, $(f_n)_{n\ge0}:=(u_{I_{n+1}})_{n\ge0}$ is a complete orthonormal family, and [F3] applies with coefficients $\mu_{I_{n+1}}$. Reindexing its sums by this bijection shows that the diagonal operator $D_\beta$ is self-adjoint; Parseval from [F4] gives $\|D_\beta\psi\|^2=\sum_I\mu_I^2|\langle\psi,u_I\rangle|^2\le\|\psi\|^2$, so its domain is all of $F(H)$ and it is bounded with norm at most one. Its coefficients are positive, so $\langle D_\beta\psi,\psi\rangle=\sum_I\mu_I|\langle\psi,u_I\rangle|^2\ge0$; hence it is positive. If $\sum_I\mu_I<\infty$, define $R_N\psi:=\sum_{m=1}^N\mu_m\langle\psi,u_{I_m}\rangle u_{I_m}$. Each $R_N$ is finite rank and compact by [F4], while Parseval gives $\|D_\beta-R_N\|\le\sup_{m>N}\mu_m\le\sum_{m>N}\mu_m\to0$. Thus $D_\beta$ is compact by [F4]. Its coefficient expansion is the nuclear representation $D_\beta\psi=\sum_{m\ge1}\langle\psi,u_{I_m}\rangle(\mu_m u_{I_m})$, whose nuclear sum is $\sum_m\mu_m<\infty$; [F4] therefore proves that $D_\beta$ is trace class. Conversely, if $D_\beta$ is trace class, [F9] applied to the supplied basis $(u_I)$ gives $\operatorname{tr}D_\beta=\sum_I\langle D_\beta u_I,u_I\rangle=\sum_I\mu_I<\infty$. Hence $D_\beta$ is trace class exactly when the $\mathcal M$-indexed sum is finite, and then its trace is that sum. [F3, F4, F9, step 1.1, step 2.1, algebra]

4.1 [Conclusion] Combining step 3.1 with step 2.2 gives (e): $D_\beta$ is trace class if and only if $\sum_je^{-\beta\varepsilon_j}<\infty$, and then $\operatorname{tr}D_\beta=\sum_Ie^{-\beta\lambda_I}=\prod_{j\ge1}(1-e^{-\beta\varepsilon_j})^{-1}$. Parts (a)-(e) are proved, and no thermal or measurement interpretation is claimed. [step 3.1, step 2.2, algebra] ∎
