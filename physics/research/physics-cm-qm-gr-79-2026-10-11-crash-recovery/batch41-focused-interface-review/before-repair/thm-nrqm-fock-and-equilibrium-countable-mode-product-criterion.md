---
id: thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion
aliases: [nrqm-fock-and-equilibrium-countable-mode-product-criterion]
kind: theorem
domain: mathematics
title: "Countable-mode product criterion"
status: draft
origin: pipeline
dependency_level: 9
deps: [def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, thm-nrqm-fock-and-equilibrium-number-operator-domain, thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, lem-diagonal-trace-class-operator-on-ell-two, def-trace-class-operator, def-trace-of-a-trace-class-operator, thm-geometric-series, thm-tonelli-for-nonnegative-double-series, thm-monotonicity-of-the-integral, def-natural-logarithm, thm-logarithm-derivative-and-integral, def-complex-exponential, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice, def-axiom-of-choice]
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
  lem-diagonal-trace-class-operator-on-ell-two: mathematical-premise
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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 1.2-1.4 pp. 5-9 and Section 4.1 p. 25 (Fock space, second quantization, ideal Bose gas partition sums)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, 2023), Section 1.4 pp. 33-37 (ideal Bose gas: single-mode geometric sums, occupation numbers and the condensate criterion)"
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

[F3] The diagonal lemma: for a complete orthonormal family $(f_I)_{I\in\mathcal M}$ of a Hilbert space and real numbers $\mu_I$, the operator with domain $\{\psi:\sum_I\mu_I^2|\langle\psi,f_I\rangle|^2<\infty\}$ and $\psi\mapsto\sum_I\mu_I\langle\psi,f_I\rangle f_I$ is self-adjoint ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]).

[F4] The Fourier-coefficient map of a complete orthonormal family is a linear bijection onto $\ell^2$ preserving norms; on $\ell^2(\mathbb N,\mathbb C)$ the diagonal operator with bounded real diagonal $(c_m)$ is trace class exactly when $\sum_m|c_m|<\infty$, with trace $\sum_mc_m$ ([[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[lem-diagonal-trace-class-operator-on-ell-two]]).

[F5] Geometric series and nonnegative double series: $\sum_{k\ge0}q^k=1/(1-q)$ for $0\le q<1$; the order of summation of a nonnegative double series may be interchanged ([[thm-geometric-series]], [[thm-tonelli-for-nonnegative-double-series]]).

[F6] For $x\ge1$, $\log x=\int_1^xdt/t$ and $0\le\log x\le x-1$, $\log x\ge1-1/x$ ([[thm-logarithm-derivative-and-integral]], [[thm-monotonicity-of-the-integral]], [[def-natural-logarithm]]); consequently $q\le-\log(1-q)\le q/(1-q)$ for $0<q<1$ (substitute $x=1/(1-q)\ge1$).




## Proof

1.1 [Orthonormality] Let $I=(j_1\le\cdots\le j_n)$, $I'=(j'_1\le\cdots\le j'_m)$ and first suppose $n=m\ge1$. Using $P_+^{(n)}=P_+^{(n)*}$ and $P_+^{(n)}\chi=\chi$ for $\chi\in\operatorname{ran}P_+^{(n)}$, [F2] gives $\langle v_I,v_{I'}\rangle=\frac1{n!}\sum_{\pi\in S_n}\langle e_{j_1}\otimes\cdots\otimes e_{j_n},U_\pi(e_{j'_1}\otimes\cdots\otimes e_{j'_n})\rangle$. Each summand is $1$ exactly when $\pi$ maps the tuple $(j'_1,\dots,j'_n)$ to $(j_1,\dots,j_n)$ and $0$ otherwise, by orthonormality of the $e_j$; since both tuples are nondecreasing, such $\pi$ exists only if $I=I'$, and then the number of such $\pi$ is the product of the factorials of the multiplicities of $I$. Hence $\langle v_I,v_{I'}\rangle=0$ for $I\ne I'$ and $\|v_I\|^2\ge1/n!>0$, so $(u_I)$ is an orthonormal family; tensors from different $n$ are orthogonal by [F1]. [F1, F2, algebra]

1.2 [Factoring the finite sums] Fix $N\ge1$. The map $I\mapsto(n_1,\dots,n_N)$ assigning to a multiset $I\subseteq\{1,\dots,N\}$ the number $n_j$ of occurrences of $j$ is a bijection onto $\mathbb N^N$, and $\lambda_I=\sum_jn_j\varepsilon_j$; by [F5] and the geometric series with $q=e^{-\beta\varepsilon_j}\in(0,1)$, $\sum_{I\subseteq\{1,\dots,N\}}e^{-\beta\lambda_I}=\sum_{(n_1,\dots,n_N)\in\mathbb N^N}\prod_{j=1}^N e^{-\beta n_j\varepsilon_j}=\prod_{j=1}^N\sum_{n\ge0}e^{-\beta n\varepsilon_j}=\prod_{j=1}^N\frac1{1-e^{-\beta\varepsilon_j}}$, the interchange of the finite product with the sums following by induction from [F5] (Tonelli for nonnegative series). [F5, algebra]

2.1 [Completeness] The ordered elementary tensors $e_{i_1}\otimes\cdots\otimes e_{i_n}$ have dense span in $H^{\otimes n}$ ([F2]); applying the bounded projection $P_+^{(n)}$ gives a dense subset of $\operatorname{ran}P_+^{(n)}$, and the vectors $P_+^{(n)}(e_{i_1}\otimes\cdots\otimes e_{i_n})$ over ordered tuples coincide with those over nondecreasing tuples because $P_+^{(n)}U_\pi=P_+^{(n)}$ ([F2]). Hence the span of $\{u_I:|I|=n\}$ is dense in $\operatorname{ran}P_+^{(n)}$; combining the sectors and using that every $\psi\in F(H)$ is the limit of its truncations ([F1]) shows that the span of all $u_I$ is dense in $F(H)$. With step 1.1 this proves (a). [F1, F2, step 1.1, algebra]

2.2 [The diagonal operator] By step 1.1 and [F3] applied to the family $(u_I)$ with $\mu_I:=e^{-\beta\lambda_I}$, the operator $D_\beta$ with the stated domain is self-adjoint; since $0<\mu_I\le1$, its quadratic form satisfies $0\le\langle D_\beta\psi,\psi\rangle\le\|\psi\|^2$ for $\psi\in D(D_\beta)$, so $D_\beta$ is positive and bounded with $\|D_\beta\|\le1$; the domain is all of $F(H)$ because $\sum_I\mu_I^2|\langle\psi,u_I\rangle|^2\le\|\psi\|^2$. Under the Fourier-coefficient map of the complete orthonormal family $(u_I)$ ([F4]) it corresponds to the diagonal operator on $\ell^2(\mathcal M)$ with diagonal $(\mu_I)$, which by [F4] is trace class exactly when $\sum_I\mu_I<\infty$, with trace $\sum_I\mu_I$; this proves (b). [F3, F4, step 1.1, algebra]

2.3 [The infinite product and the criterion] The finite sums of step 1.2 increase with $N$ because all terms are positive, so $\sum_{I\in\mathcal M}e^{-\beta\lambda_I}=\lim_N\sum_{I\subseteq\{1,\dots,N\}}e^{-\beta\lambda_I}=\lim_N\prod_{j\le N}(1-e^{-\beta\varepsilon_j})^{-1}\in(0,\infty]$, which is (c). Put $q_j:=e^{-\beta\varepsilon_j}\in(0,1)$; by [F6], $q_j\le-\log(1-q_j)\le q_j/(1-q_j)\le2q_j$ whenever $q_j\le1/2$. Hence, after discarding the finitely many $j$ with $q_j>1/2$, $\sum_jq_j\le\sum_j-\log(1-q_j)\le2\sum_jq_j$ in the extended sense; since $\sum_j-\log(1-q_j)=-\log\prod_j(1-q_j)$ by the product-to-sum property of the logarithm, the partial products $\prod_{j\le N}(1-q_j)$ have a strictly positive limit exactly when $\sum_jq_j<\infty$, and tend to $0$ otherwise. Therefore $\lim_N\prod_{j\le N}(1-q_j)^{-1}<\infty$ if and only if $\sum_je^{-\beta\varepsilon_j}<\infty$, and in that case the limit is the infinite product $\prod_{j\ge1}(1-e^{-\beta\varepsilon_j})^{-1}$; this proves (d). [F5, F6, def. natural logarithm, step 1.2, algebra]

3.1 [Conclusion] Combining step 2.2 with step 2.3 gives (e): $D_\beta$ is trace class if and only if $\sum_je^{-\beta\varepsilon_j}<\infty$, and then $\operatorname{tr}D_\beta=\sum_Ie^{-\beta\lambda_I}=\prod_{j\ge1}(1-e^{-\beta\varepsilon_j})^{-1}$. Parts (a)-(e) are proved, and no thermal or measurement interpretation is claimed. [step 2.2, step 2.3, algebra] ∎
