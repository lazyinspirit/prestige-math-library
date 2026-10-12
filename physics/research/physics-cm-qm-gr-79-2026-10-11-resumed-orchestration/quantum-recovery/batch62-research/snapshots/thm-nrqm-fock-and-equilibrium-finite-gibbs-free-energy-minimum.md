---
id: thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum
aliases: [nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum]
kind: theorem
domain: mathematics
title: "Finite Gibbs free-energy minimum"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-composites-density-and-scalar-spectral-probability, thm-complex-spectral-theorem-for-normal-endomorphisms, def-trace-class-operator, def-trace-of-a-trace-class-operator, thm-trace-is-absolutely-convergent-and-basis-independent, def-convex-concave-and-midpoint-convex-functions, thm-finite-jensen-inequality, cor-second-derivative-characterises-convexity, thm-logarithm-derivative-and-integral, thm-monotonicity-of-the-integral, def-natural-logarithm, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-convex-concave-and-midpoint-convex-functions: mathematical-premise
  thm-finite-jensen-inequality: mathematical-premise
  cor-second-derivative-characterises-convexity: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, 2023), Sections 1.1.3-1.1.5 pp. 13-15 (von Neumann entropy, maximal entropy principle, Gibbs distribution, relation with free energy)"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 6.1 pp. 38-40 (statistical mechanics of finite systems; Gibbs weights)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$\mathfrak H$ be a finite-dimensional complex Hilbert space of dimension
$d\ge1$ with inner product linear in the first argument
([[def-hilbert-space]]), let $H:\mathfrak H\to\mathfrak H$ be a self-adjoint
linear operator with real eigenvalues $E_1,\dots,E_d$ (repeated according to
multiplicity) and orthonormal eigenbasis $(v_1,\dots,v_d)$, and let $\beta>0$.
Write
$$Z:=\sum_{j=1}^d e^{-\beta E_j}\in(0,\infty),\qquad \rho_\beta:=\frac1Z\sum_{j=1}^d e^{-\beta E_j}T_{v_j,v_j},$$
where $T_{u,v}x=\langle x,v\rangle u$
([[lem-nrqm-composites-density-and-scalar-spectral-probability]]). Let
$\mathcal D$ be the set of density operators on $\mathfrak H$, i.e. positive
self-adjoint trace-class operators $\rho$ with $\operatorname{tr}\rho=1$
([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]]), and
for $\rho\in\mathcal D$ with eigenvalues $w_1,\dots,w_d\ge0$ (counted with
multiplicity and in any order) define the entropy
$$s(\rho):=-\sum_{i:\,w_i>0}w_i\log w_i\in[0,\log d]$$
([[def-natural-logarithm]]). Then:

(a) $\rho_\beta\in\mathcal D$, $\operatorname{tr}(\rho_\beta H)=\frac1Z\sum_je^{-\beta E_j}E_j$,
and
$$\operatorname{tr}(\rho_\beta H)-\beta^{-1}s(\rho_\beta)=-\beta^{-1}\log Z ;$$

(b) for every $\rho\in\mathcal D$,
$$\operatorname{tr}(\rho H)-\beta^{-1}s(\rho)\ \ge\ -\beta^{-1}\log Z ;$$

(c) for every $\rho\in\mathcal D$, $s(\rho)\le\log d$, with $s(\rho)=\log d$ if
and only if $\rho=d^{-1}\,\mathrm{id}$; when $H=0$ one has $Z=d$,
$\rho_\beta=d^{-1}\mathrm{id}$ and the bound in (b) is attained there.

The combination $\operatorname{tr}(\rho H)-\beta^{-1}s(\rho)$ is a purely
mathematical functional of $(\rho,H,\beta)$; identifying $\beta$ with an
inverse physical temperature and $\rho_\beta$ with a thermal equilibrium state
are additional physical assumptions not asserted here.

## Facts & Assumptions
**Given:** the finite-dimensional complex Hilbert space $\mathfrak H$ of dimension $d\ge1$, the self-adjoint operator $H$ with eigenvalues $E_j$ and orthonormal eigenbasis $(v_j)$, the number $\beta>0$, the partition sum $Z$, the Gibbs weight operator $\rho_\beta$, and an arbitrary density operator $\rho\in\mathcal D$ with eigenvalues $w_i$ and orthonormal eigenbasis $(u_i)$.

[F1] Finite-dimensional spectral theorem: every self-adjoint (indeed normal) endomorphism of $\mathfrak H$ has an orthonormal basis of eigenvectors; the eigenvalues are real for $H$, and $\rho$ has an orthonormal eigenbasis with $w_i\ge0$, $\sum_iw_i=\operatorname{tr}\rho=1$ ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

[F2] On a finite-dimensional space every operator is trace class, the trace is basis-independent, and for a diagonal operator the trace is the sum of its eigenvalues ([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F3] The function $\log:(0,\infty)\to\mathbb R$ is strictly concave with $\log'(x)=1/x$, and for $x\ge1$, $\log x=\int_1^xdt/t$ with $1-1/x\le\log x\le x-1$ ([[thm-logarithm-derivative-and-integral]], [[cor-second-derivative-characterises-convexity]], [[def-convex-concave-and-midpoint-convex-functions]], [[def-natural-logarithm]], [[thm-monotonicity-of-the-integral]]).

[F4] Finite Jensen: for a convex function $f$ and weights $\lambda_i\ge0$ with $\sum_i\lambda_i=1$, $f(\sum_i\lambda_ix_i)\le\sum_i\lambda_if(x_i)$; applied to $f=-\log$ this gives $\sum_i\lambda_i\log x_i\le\log\sum_i\lambda_ix_i$ for $x_i>0$ ([[thm-finite-jensen-inequality]]).




## Proof

1.1 [The Gibbs state and its entropy] The weights $q_j:=e^{-\beta E_j}/Z$ are positive with $\sum_jq_j=1$, so by [F1] and [F2] $\rho_\beta=\sum_jq_jT_{v_j,v_j}$ is a positive self-adjoint operator with orthonormal eigenbasis $(v_j)$, eigenvalues $q_j$ and trace $1$; hence $\rho_\beta\in\mathcal D$. Its entropy is $s(\rho_\beta)=-\sum_jq_j\log q_j=\sum_jq_j(\beta E_j+\log Z)=\beta\operatorname{tr}(\rho_\beta H)+\log Z$ by [F2], where $\operatorname{tr}(\rho_\beta H)=\sum_jq_jE_j$. Rearranging gives $\operatorname{tr}(\rho_\beta H)-\beta^{-1}s(\rho_\beta)=-\beta^{-1}\log Z$, which is (a). [F1, F2, algebra]

1.2 [The doubly stochastic matrix] Let $p_{ij}:=|\langle u_i,v_j\rangle|^2$. Since $(u_i)$ and $(v_j)$ are orthonormal bases, [F1] gives $p_{ij}\ge0$, $\sum_jp_{ij}=\|u_i\|^2=1$ and $\sum_ip_{ij}=\|v_j\|^2=1$: the matrix $(p_{ij})$ is doubly stochastic. For $r_i:=\sum_jp_{ij}q_j$ one has $r_i>0$ because all $q_j>0$ and $\sum_jp_{ij}=1$. [F1, algebra]

1.3 [The entropy bound] Let $k:=\#\{i:w_i>0\}$; the weights $w_i$ over those $k$ indices are positive and sum to $1$, so Jensen in the form of [F4] with $f=-\log$, convex, applied to the $k$ points $1/w_i$ gives $s(\rho)=\sum_{w_i>0}w_i\log(1/w_i)\le\log\bigl(\sum_{w_i>0}w_i(1/w_i)\bigr)=\log k\le\log d$. If $s(\rho)=\log d$, then $k=d$ and $-\log$ must be affine on the finite set $\{1/w_i:w_i>0\}$; since $-\log$ is strictly convex ([F3]) all these points coincide, so all $w_i=1/d$ and $\rho=\sum_i(1/d)T_{u_i,u_i}=d^{-1}\mathrm{id}$; conversely $\rho=d^{-1}\mathrm{id}$ clearly has $s(\rho)=\log d$. When $H=0$ all $E_j=0$, so $Z=d$ and $\rho_\beta=d^{-1}\mathrm{id}$, and the bound of (b) reads $0-\beta^{-1}\log d=-\beta^{-1}\log d$. [F1, F3, F4, algebra]

2.1 [Relative entropy is nonnegative] With $w_i$ the eigenvalues of $\rho$ in the orthonormal eigenbasis $(u_i)$ of [F1], $\log\rho=\sum_{i:w_i>0}(\log w_i)T_{u_i,u_i}$ and $\log\rho_\beta=\sum_j(\log q_j)T_{v_j,v_j}$ (spectral calculus on finite-dimensional spaces), so by [F2] $\operatorname{tr}(\rho\log\rho)=\sum_{i:w_i>0}w_i\log w_i$ and $\operatorname{tr}(\rho\log\rho_\beta)=\sum_{i:w_i>0}w_i\sum_jp_{ij}\log q_j$. By [F4] applied for each $i$ with $w_i>0$ to the weights $p_{ij}$ (which sum to $1$) and the positive numbers $q_j$, $\sum_jp_{ij}\log q_j\le\log r_i$. Hence $\operatorname{tr}(\rho\log\rho)-\operatorname{tr}(\rho\log\rho_\beta)\ge\sum_{i:w_i>0}w_i(\log w_i-\log r_i)=\sum_{i:w_i>0}w_i\log(w_i/r_i)$. Writing $w_i\log(w_i/r_i)=-w_i\log(r_i/w_i)$ and using [F3] with $x=r_i/w_i\ge0$ gives $w_i\log(w_i/r_i)\ge w_i-r_i$ for $w_i>0$; summing, $\sum_{i:w_i>0}(w_i-r_i)=1-\sum_ir_i=1-\sum_jq_j\sum_ip_{ij}=1-1=0$ by step 1.2. Therefore $\operatorname{tr}(\rho\log\rho)\ge\operatorname{tr}(\rho\log\rho_\beta)$. [F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 [The lower bound] By the spectral description of $\rho_\beta$ in step 1.1, $\operatorname{tr}(\rho\log\rho_\beta)=\sum_j(\log q_j)\operatorname{tr}(\rho T_{v_j,v_j})=\sum_j(-\beta E_j-\log Z)\langle\rho v_j,v_j\rangle=-\beta\operatorname{tr}(\rho H)-\log Z$, since $\sum_j\langle\rho v_j,v_j\rangle=\operatorname{tr}\rho=1$ and $\operatorname{tr}(\rho H)=\sum_jE_j\langle\rho v_j,v_j\rangle$ (because $H=\sum_jE_jT_{v_j,v_j}$). Combining with step 2.1 gives $\operatorname{tr}(\rho\log\rho)\ge-\beta\operatorname{tr}(\rho H)-\log Z$; multiplying by $\beta^{-1}$ and rearranging, using $s(\rho)=-\operatorname{tr}(\rho\log\rho)$, gives the bound (b). [F2, step 1.1, step 2.1, algebra]

4.1 [Conclusion and scope] Steps 1.1-3.1 prove (a), (b) and (c), including the asserted equality in (a) and the attainment in (c). The final paragraph of the statement records that the thermodynamic reading of the functional and of $\rho_\beta$ requires additional physical assumptions, which are not part of this mathematical statement. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, algebra] ∎
