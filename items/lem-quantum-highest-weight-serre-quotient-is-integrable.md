---
id: lem-quantum-highest-weight-serre-quotient-is-integrable
kind: lemma
title: "The dominant quantum Serre quotient is nonzero and integrable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-drinfeld-jimbo-quantized-enveloping-algebra, def-quantum-verma-module-and-simple-highest-weight-quotient, def-quantum-weight-module-and-integrability, def-quantum-integers-factorials-and-divided-powers-at-q-i, lem-divided-power-and-toral-quantum-binomial-reordering-identities, thm-quantized-sl-two-string-formulas]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§2, printed pp. 6-8, Proposition 2.2 (statement only, citing earlier literature): for $\\lambda\\in P^+$ the highest vector satisfies $f_i^{\\lambda(h_i)+1}v_\\lambda=0$, and every highest weight module whose highest vector satisfies these relations is isomorphic to $V(\\lambda)$."
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules.'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "PDF pp. 7, 9-10: generators of the restricted A-form, the toral product definition, and equal-exponent divided-power reordering. These slides provide integral-form background, not a proof of the generic highest-weight or lattice claims. The printed shift recurrence on PDF p. 10 has a typo; any shift identity used here is derived locally from the product."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, printed pp. 315-317: the finite-dimensional quotients of the Verma module for dominant integral weights."
---

## Statement

Let $\lambda\in P$ be dominant integral, so $m_i:=\langle\lambda,h_i\rangle\ge0$
for all $i$, and let $M(\lambda)$ be the Verma module with highest vector
$v_\lambda$ ([[def-quantum-verma-module-and-simple-highest-weight-quotient]]).
Put $s_i:=F_i^{(m_i+1)}v_\lambda$.

(i) Every $s_i$ is a singular (highest weight) vector of weight
$\lambda-(m_i+1)\alpha_i$.

(ii) The graded submodule
$S:=\sum_iU_q(\mathfrak g)s_i=\sum_iU_q^-s_i$ is proper, and the quotient
$\tilde L(\lambda):=M(\lambda)/S$ is nonzero, has finite-dimensional
label-weight spaces, and is integrable ([[def-quantum-weight-module-and-integrability]]).

(iii) Every integrable cyclic highest weight module $V$ of highest weight
$\lambda$ is a quotient of $\tilde L(\lambda)$.

No commutation between divided powers $F_i^{(a)},F_j^{(b)}$ of distinct indices
with $a_{ij}\ne0$ is assumed anywhere.

## Facts & Assumptions

**Given:** A dominant integral weight $\lambda\in P$, the Verma module $M(\lambda)=U_q^-v_\lambda$ with its label grading, and the elements $s_i=F_i^{(m_i+1)}v_\lambda$.

[F1] $M(\lambda)$ is a $P$-graded type-one module with $M(\lambda)_{\lambda-\nu}=U_q^-[-\nu]v_\lambda$, finite-dimensional graded pieces, $K_hv_\lambda=q^{\langle\lambda,h\rangle}v_\lambda$ and $E_iv_\lambda=0$; the labels of all nonzero vectors lie in $\lambda-Q_+$ ([[def-quantum-verma-module-and-simple-highest-weight-quotient]], [[def-quantum-weight-module-and-integrability]]).

[F2] $E_i^{(a)}$ and $F_j^{(b)}$ commute for $i\ne j$, while for every $b\ge1$ the rank-one reordering gives $E_iF_i^{(b)}=F_i^{(b)}E_i+F_i^{(b-1)}T_{i,1-b,1}$ with $T_{i,1-b,1}v_\lambda=[m_i-b+1]_iv_\lambda$ ([[lem-divided-power-and-toral-quantum-binomial-reordering-identities]] (iii), [[thm-quantized-sl-two-string-formulas]] (ii)).

[F3] For every $j\ne i$ with $N:=1-a_{ij}\ge1$, the quantum Serre relation $\sum_{r=0}^{N}(-1)^r\binom{N}{r}_iF_i^{N-r}F_jF_i^r=0$ holds, monic in $F_j$ ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F4] $[n]_i=0$ if and only if $n=0$ (for integers $n$), and $[n]_i!\ne0$ for all $n\ge0$; consequently $F_i^{(t)}\ne0$ whenever $F_i^t\ne0$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).



## Verification

**Proof technique:** compute the action of the raising generators on the divided-power string vectors, prove the generated submodule is proper by its label support, and prove local nilpotence of $F_i$ by a word induction that uses the quantum Serre relation instead of the false commutation of adjacent generators.

1.1 The vector $s_i$ is singular. For the raising operator $E_i$: by [F2], $E_iF_i^{(m_i+1)}v_\lambda=F_i^{(m_i)}T_{i,-m_i,1}v_\lambda=[m_i-(m_i+1)+1]_iF_i^{(m_i)}v_\lambda=[0]_iF_i^{(m_i)}v_\lambda=0$. For $j\ne i$: $E_j$ commutes with $F_i^{(m_i+1)}$ by [F2], so $E_js_i=F_i^{(m_i+1)}E_jv_\lambda=0$. Also $K_hs_i=q^{\langle\lambda-(m_i+1)\alpha_i,h\rangle}s_i$ by [F1], so $s_i$ is a highest weight vector of weight $\lambda-(m_i+1)\alpha_i$. [given, F1, F2, algebra]

1.2 Local nilpotence of $F_i$, first the Serre rewrite. Claim: for every $R\ge N:=1-a_{ij}$ ($j\ne i$) one has $F_i^RF_j=\sum_{t=0}^{N-1}c_t(R)F_i^tF_jF_i^{R-t}$ with coefficients $c_t(R)\in\mathbb Q(q)$ that may depend on $R$. For $R=N$ this is [F3] solved for $F_i^NF_j$: the $F_i^NF_j$ coefficient is $\binom{N}{0}_i=1$, giving $F_i^NF_j=\sum_{r=1}^{N}(-1)^{r+1}\binom{N}{r}_iF_i^{N-r}F_jF_i^r$. If the claim holds for $R$, then $F_i^{R+1}F_j=F_i\bigl(\sum_tc_t(R)F_i^tF_jF_i^{R-t}\bigr)=\sum_{t\le N-2}c_t(R)F_i^{t+1}F_jF_i^{R-t}+c_{N-1}(R)F_i^NF_jF_i^{R-N+1}$, and substituting the $R=N$ expansion into the last term expresses it in the required form with $t=N-r\le N-1$. [given, F3, algebra]

2.1 The submodule $S$ is proper. Since each $s_i$ is a highest weight vector killed by all $E_j$ and acted on by the torus by scalars, the triangular decomposition gives $U_q(\mathfrak g)s_i=U_q^-s_i$. Hence $S=\sum_iU_q^-s_i$ is spanned by vectors whose labels lie in $\lambda-(m_i+1)\alpha_i-Q_+$, all of which are strictly below $\lambda$ in the order of [F1]; therefore the top component of $S$ vanishes, $v_\lambda\notin S$, and $S\ne M(\lambda)$: the quotient $\tilde L(\lambda)=M(\lambda)/S$ is nonzero with $\bar v_\lambda\ne0$. Being a quotient of $M(\lambda)$ by a graded submodule, $\tilde L(\lambda)$ is graded with label-weight spaces that are quotients of the finite-dimensional spaces $M(\lambda)_\mu$; its support lies in $\lambda-Q_+$ and its top space is $\mathbb Q(q)\bar v_\lambda$. [step 1.1, F1, algebra]

2.2 Local nilpotence of $F_i$ on every vector. We prove by induction on the word length $m$ that for every word $w=F_{j_1}\cdots F_{j_m}$ there is an integer $K(w)$ with $F_i^{K}w\bar v_\lambda=0$ for $K\ge K(w)$. For $m=0$, $F_i^{m_i+1}\bar v_\lambda=0$ in the quotient by its defining relation, and therefore $F_i^t\bar v_\lambda=0$ for $t\ge m_i+1$. For the step, write $w=F_jw'$. If $j=i$ then $F_i^Kw\bar v_\lambda=F_i^{K+1}w'\bar v_\lambda=0$ for $K+1\ge K(w')$. If $j\ne i$, let $N=1-a_{ij}$ and let $S:=K(w')$; for $R\ge S+N-1$ the rewrite of step 1.2 gives $F_i^Rw\bar v_\lambda=\sum_{t=0}^{N-1}c_t(R)F_i^tF_jF_i^{R-t}w'\bar v_\lambda$ with $R-t\ge S$, so each $F_i^{R-t}w'\bar v_\lambda=0$ by induction and $F_i^Rw\bar v_\lambda=0$. Thus $K(w):=S+N-1$ works. Since $\tilde L(\lambda)$ is spanned by the finitely many word classes $w\bar v_\lambda$ in each label piece, a general vector is a finite combination of such classes and is killed by a large power of $F_i$: $F_i$ is locally nilpotent on $\tilde L(\lambda)$. [step 1.2, F1, F4, algebra]

3.1 Local nilpotence of $E_i$ on $\tilde L(\lambda)$: if $x$ is a nonzero vector of label $\mu$, then $E_i^nx$ has label $\mu+n\alpha_i$, and by the support bound of step 2.1 a nonzero vector of that label requires $\lambda-\mu-n\alpha_i\in Q_+$, i.e. $n\le\operatorname{ht}(\lambda-\mu)<\infty$. Hence $E_i^nx=0$ for $n>\operatorname{ht}(\lambda-\mu)$, uniformly for $x$ of that label: $E_i$ is locally nilpotent. [step 2.1, F1, algebra]

4.1 The universal property and conclusion. Let $V$ be an integrable cyclic highest weight module of weight $\lambda$ with highest vector $v\ne0$ ($E_iv=0$, $K_hv=q^{\langle\lambda,h\rangle}v$, $V=U_q(\mathfrak g)v$). By the universal property of the Verma module there is a surjection $M(\lambda)\twoheadrightarrow V$, $v_\lambda\mapsto v$. Let $t_i$ be minimal with $F_i^{t_i}v=0$ (it exists since $V$ is integrable). If $t_i\ge1$ then $F_i^{t_i-1}v\ne0$; applying $E_i$ and using the rank-one reordering of [F2] gives $0=E_iF_i^{(t_i)}v=[m_i-t_i+1]_iF_i^{(t_i-1)}v$, so $[m_i-t_i+1]_i=0$ and hence $t_i=m_i+1$ by [F4]. Therefore the surjection kills every $s_i=F_i^{(m_i+1)}v_\lambda$, hence kills $S$, and factors through $\tilde L(\lambda)\twoheadrightarrow V$: every integrable cyclic highest weight module of weight $\lambda$ is a quotient of $\tilde L(\lambda)$. Together with the preceding construction this proves (i), (ii) and (iii); no commutation between distinct adjacent-root negative divided powers was used, only the quantum Serre relation and the cross-half commutation. [step 1.1, step 2.1, step 3.1, step 2.2, F1, F2, F3, F4, algebra] ∎
