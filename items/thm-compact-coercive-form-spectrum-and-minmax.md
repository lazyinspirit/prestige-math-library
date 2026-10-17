---
id: thm-compact-coercive-form-spectrum-and-minmax
kind: theorem
title: Discrete spectrum and min–max principle for a compact coercive form
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-compact-linear-operator
  - def-countable-choice
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - lem-compositions-with-a-compact-operator-are-compact
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-hilbert-space-fourier-expansion
  - thm-lax-milgram
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-rank-nullity
  - thm-spectral-theorem-for-compact-self-adjoint-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapters 46–47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap46.pdf
      locator: "Chapter 46 §46.1.3 and Chapter 47 §47.1: compact self-adjoint solution operators and coercive form eigenpairs."
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§§47.1.1–47.1.2, Hilbert basis, form-norm expansion, Rayleigh quotient and min–max principle."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.1–8.2, printed pp. 128–130: abstract compact embedding, solution operator and spectral theorem."
verification: {}
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be an infinite-dimensional
real or complex Hilbert space, let $V$ be a real or complex Hilbert space over
the same field, and let $J:V\to H$ be an injective, bounded, compact linear
map with dense range ([[def-compact-linear-operator]]). Let
$a:V\times V\to\mathbb K$ be bounded, Hermitian and coercive with constants
$M,\alpha>0$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).
Then there is a sequence of eigenpairs $(\lambda_j,e_j)_{j\ge1}$ such that
$$0<\lambda_1\le\lambda_2\le\cdots,\qquad \lambda_j\longrightarrow+\infty,$$
where each eigenvalue is repeated according to multiplicity,
$e_j\in V$, $\|Je_j\|_H=1$, and
$$a(e_j,v)=\lambda_j(Je_j,Jv)_H\qquad(v\in V).$$
The vectors $Je_j$ form an orthonormal basis of $H$, and
$e_j/\sqrt{\lambda_j}$ form an orthonormal basis of $V$ for the energy inner
product $a$. In particular, for $v\in V$,
$$\|Jv\|_H^2=\sum_{j\ge1}|(Jv,Je_j)_H|^2,\qquad a(v,v)=\sum_{j\ge1}\lambda_j|(Jv,Je_j)_H|^2,$$
and the Rayleigh quotient $R(v):=a(v,v)/\|Jv\|_H^2$ satisfies the attained
min–max identity
$$\lambda_m=\min_{\substack{S\subseteq V\\\dim S=m}} \max_{v\in S\setminus\{0\}}R(v)\qquad(m\ge1).$$
This is the abstract continuous spectral interface used below. The published
elliptic suppliers on the Dirichlet branch have their own stated domain and
axiom hypotheses; this theorem does not enlarge those imported interfaces.

## Facts & Assumptions

**Given:** Countable Choice, the Hilbert spaces $V,H$, the injective compact inclusion $J:V\to H$ with dense range, and the bounded Hermitian coercive form $a$.

[F1] Boundedness, Hermitian symmetry and coercivity mean $|a(u,v)|\le M\|u\|_V\|v\|_V$, $a(u,v)=\overline{a(v,u)}$, and $\operatorname{Re}a(u,u)\ge\alpha\|u\|_V^2$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] Countable Choice permits Lax–Milgram for a bounded coercive form on a Hilbert space ([[thm-lax-milgram]], [[def-countable-choice]]).

[F3] A compact operator composed after a bounded operator is compact ([[def-compact-linear-operator]], [[lem-compositions-with-a-compact-operator-are-compact]]).

[F4] A compact self-adjoint operator on a Hilbert space has finite-dimensional nonzero eigenspaces, at most countably many nonzero eigenvalues accumulating only at zero, and the closed span of its nonzero eigenspaces is the orthogonal complement of its kernel. Its orthogonal eigenprojections give a norm convergent spectral expansion ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F5] A complete orthonormal family in a Hilbert space gives norm convergence of its Fourier sums and Parseval's identity ([[thm-hilbert-space-fourier-expansion]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[F6] A closed subspace of a Hilbert space has an orthogonal decomposition ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F7] A linear map from an $m$-dimensional space to an $(m-1)$-dimensional space has a nonzero kernel ([[thm-rank-nullity]]).

[F8] The unit sphere of a finite-dimensional subspace is compact, and a continuous real-valued function on it attains its maximum ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

## Proof
**Proof technique:** direct.

**Given:** The data of the statement and $C_J:=\|J\|$.

1.1 For $f\in H$, the functional $v\mapsto(f,Jv)_H$ is bounded on $V$ because $|(f,Jv)_H|\le C_J\|f\|_H\|v\|_V$. Apply [F2] to obtain a unique $Sf\in V$ satisfying $a(Sf,v)=(f,Jv)_H$ for every $v\in V$. Uniqueness makes $S:H\to V$ linear. [F1, F2, given, choose]

2.1 Testing with $v=Sf$ and using coercivity gives $\alpha\|Sf\|_V^2\le a(Sf,Sf)=\operatorname{Re}(f,JSf)_H \le |(f,JSf)_H|\le C_J\|f\|_H\|Sf\|_V.$ If $Sf\ne0$, divide by $\alpha\|Sf\|_V$; if $Sf=0$ the same bound is immediate. Thus $S$ is bounded from $H$ to $V$ with $\|Sf\|_V\le(C_J/\alpha)\|f\|_H$. [F1, step 1.1, algebra]

2.2 Set $T:=JS:H\to H$. By [F3], $T$ is compact. For $f,g\in H$, testing the defining equations for $Sf$ and $Sg$ at $Sg$ and $Sf$ respectively and using Hermitian symmetry gives $(Tf,g)_H=(f,Tg)_H$; hence $T$ is self-adjoint. Also $(f,Tf)_H=a(Sf,Sf)\ge0$. If $Tf=0$, injectivity of $J$ gives $Sf=0$, so $(f,Jv)_H=0$ for every $v\in V$ by step 1.1. Density of $J(V)$ then gives $f=0$. Thus $T$ is positive and injective. [F1, F3, step 1.1, given, algebra]

3.1 Apply [F4] to $T$. Its nonzero eigenvalues are positive because $T$ is positive, and its kernel is zero by step 2.2; therefore the eigenspaces of its nonzero eigenvalues span $H$. There are infinitely many eigenvalue occurrences, because each eigenspace has finite dimension while $H$ is infinite-dimensional. Write $d(\nu):=\dim E_\nu$. Recursively list a largest eigenvalue among those whose multiplicity has not yet been exhausted: after any finite number of entries the remaining set is nonempty, and if $\rho>0$ is any remaining value, only finitely many remaining eigenvalues are at least $\rho$, each with finite multiplicity. Iterated trichotomy gives a maximum of these finitely many occurrences, which is then maximal in the whole remainder. The resulting sequence lists every $\nu$ exactly $d(\nu)$ times, since only finitely many occurrences are at least its value. Thus $\mu_1\ge\mu_2\ge\cdots>0$ includes all multiplicities. Compactness gives $\mu_j\to0$; Countable Choice selects an orthonormal basis of each finite-dimensional eigenspace, and these bases give the ordered family $(f_j)$ [F2, F4]. [F2, F4, step 2.2, given, choose]

4.1 Since $Tf_j=J(Sf_j)=\mu_j f_j$ and $J$ is injective, each $f_j$ belongs to the image $J(V)$. Identify it with its unique preimage $e_j\in V$. The equation $a(Sf_j,v)=(f_j,Jv)_H$ and $Sf_j=\mu_j e_j$ imply $a(e_j,v)=\mu_j^{-1}(Je_j,Jv)_H\qquad(v\in V).$ Set $\lambda_j:=\mu_j^{-1}$. Then $0<\lambda_1\le\lambda_2\le\cdots$, $\lambda_j\to+\infty$, $\|Je_j\|_H=1$, and the displayed form eigenrelation holds. [step 3.1, step 1.1, given, algebra]

5.1 By [F1], the energy norm induced by $a$ is equivalent to $\|\cdot\|_V$, so $V$ is complete in that norm. Put $\phi_j:=e_j/\sqrt{\lambda_j}$. The eigenrelation in step 4.1 gives $a(\phi_i,\phi_j)=\delta_{ij}$, so $(\phi_j)$ is an orthonormal family in $V$ with inner product $a$. If $v\in V$ is $a$-orthogonal to every $\phi_j$, the same eigenrelation gives $(Jv,Je_j)_H=0$ for every $j$. The vectors $(Je_j)$ are an orthonormal basis of $H$ by step 3.1, so $Jv=0$; injectivity of $J$ gives $v=0$. Thus the closed span of $(\phi_j)$ has zero orthogonal complement in $V$, and [F6] implies it is all of $V$. [F1, F6, step 3.1, step 4.1, given]

6.1 Parseval in $H$ for $(Je_j)$ and in $V$ for $(\phi_j)$ yields, for every $v\in V$, $\|Jv\|_H^2=\sum_j|(Jv,Je_j)_H|^2,\qquad a(v,v)=\sum_j|a(v,\phi_j)|^2=\sum_j\lambda_j|(Jv,Je_j)_H|^2.$ For $v\ne0$, $\|Jv\|_H>0$ by injectivity, so $R(v)$ is the weighted average of the $\lambda_j$ with weights $|(Jv,Je_j)_H|^2$. [F5, step 4.1, step 5.1, given, algebra]

7.1 Let $E_m:=\operatorname{span}\{e_1,\ldots,e_m\}$. Step 6.1 shows $R(v)\le\lambda_m$ for every nonzero $v\in E_m$, with equality at $e_m$; hence $\max_{v\in E_m\setminus\{0\}}R(v)=\lambda_m$. This gives one inequality in the min–max identity, attained by $E_m$. [step 6.1, given, algebra]

8.1 Let $S\subseteq V$ have dimension $m$. The map $S\to\mathbb K^{m-1}$ taking $v$ to $((Jv,Je_1)_H,\ldots,(Jv,Je_{m-1})_H)$ has a nonzero kernel by [F7]. For a nonzero vector $v$ in that kernel, the expansion of step 6.1 has no terms with index below $m$, so $R(v)\ge\lambda_m$. Thus the maximum Rayleigh quotient on every such $S$ is at least $\lambda_m$. It is attained on the unit sphere by [F8], so the outer minimum is at least $\lambda_m$ and equals the value from step 7.1. [F7, F8, step 6.1, step 7.1, given, algebra] ∎

## Remarks

The proof uses Countable Choice through Lax–Milgram and the compact self-adjoint spectral theorem. It does not use the Axiom of Choice. A specified coercive shift of a lower-bounded Hermitian form is handled by applying this theorem to the shifted form and subtracting the same shift from every continuous and discrete eigenvalue; the ordering is unchanged.
