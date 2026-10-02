---
id: cor-first-cousin-problem-pseudoconvex-domain
kind: corollary
title: "First Cousin problem on a pseudoconvex domain"
status: published
origin: pipeline
deps:
  - lem-locally-finite-smooth-partition-of-unity-on-domain
  - cor-dolbeault-vanishing-pseudoconvex-domain
  - def-meromorphic-function-in-several-complex-variables
  - def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
  - def-holomorphic-function-in-several-complex-variables
  - def-bigraded-complex-differential-forms
  - thm-d-dbar-decomposition-and-identities
  - thm-cauchy-riemann-characterization-in-several-complex-variables
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Ch. 4 §4.6, Lemma 4.6.4 and Theorem 4.6.5 with their proofs, printed pp. 153-154 (smooth solution of Cousin-I data by a partition of unity, closedness and global holomorphy of the correction, and the final meromorphic gluing)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §6.2 (sheaf of meromorphic functions, local quotients without global representation) and Ch. VIII §6, Theorems 6.5/6.9 for the smooth ∂̄-solution used through the in-pair corollary cor-dolbeault-vanishing-pseudoconvex-domain."
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§§3.3.2-3.3.3, the ∂̄-correction and L² solvability used to supply the smooth solution of the (0,1)-equation."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice (AC). Let $n\ge1$ and let
$\Omega\subseteq\mathbb C^n$ be a Hartogs pseudoconvex domain
([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]). Let
$(U_i)_{i\in I}$ be a locally finite open cover of $\Omega$ and, for every
$i\in I$, let $m_i$ be a meromorphic function on $U_i$
([[def-meromorphic-function-in-several-complex-variables]]) such that for all
$i,j\in I$ the difference $m_i-m_j$ is holomorphic on $U_i\cap U_j$
(clause (c) of the definition of a meromorphic function).

Then there is a meromorphic function $G$ on $\Omega$ such that $G-m_i$ is
holomorphic on $U_i$ for every $i\in I$. Equivalently, the first Cousin
problem with the locally finite data $(m_i)_{i\in I}$ is solvable: one global
meromorphic function realizes the prescribed principal parts.

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge1$; a Hartogs pseudoconvex domain $\Omega\subseteq\mathbb C^n$; a locally finite open cover $(U_i)_{i\in I}$ of $\Omega$; meromorphic functions $m_i$ on $U_i$ with $m_i-m_j$ holomorphic on $U_i\cap U_j$ for all $i,j\in I$; the Wirtinger operators and the operators $\partial,\bar\partial$ on smooth forms of [[def-bigraded-complex-differential-forms]].

[F1] A domain $\Omega\subseteq\mathbb C^m$ is **Hartogs pseudoconvex** when $z\mapsto-\log\delta_\Omega(z)$ is plurisubharmonic on $\Omega$ ([[def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity]]).

[F2] If $F$ is meromorphic on an open $U\subseteq\mathbb C^m$ with domain $D$ and $h\in\mathcal O(U)$, then $F+h$ is meromorphic on $U$ (clause (d) of [[def-meromorphic-function-in-several-complex-variables]]); and $F$ is holomorphic on an open $V\subseteq U$ when some $H\in\mathcal O(V)$ agrees with $F$ on $D\cap V$ (clause (c)).

[F3] Meromorphy is a local condition: if every point of $U$ has a neighbourhood to which $F$ restricts as a meromorphic function, then $F$ is meromorphic on $U$ ([[def-meromorphic-function-in-several-complex-variables]]).

[F4] Let $\Omega\subseteq\mathbb C^n$ be a domain and let $(U_i)_{i\in I}$ be an open cover of $\Omega$. Then there are a locally finite open cover $(V_k)_{k\in\mathbb N}$ of $\Omega$ refining $(U_i)$ with $V_k\subseteq U_{i(k)}$ and smooth functions $\chi_k\in C^\infty(\Omega)$ with $0\le\chi_k\le1$, $\operatorname{supp}\chi_k\subseteq V_k$, locally finite supports and $\sum_k\chi_k=1$ on $\Omega$ ([[lem-locally-finite-smooth-partition-of-unity-on-domain]]).

[F5] Let $\Omega\subseteq\mathbb C^n$ be Hartogs pseudoconvex and let $1\le q\le n$. Every smooth $\bar\partial$-closed $(0,q)$-form on $\Omega$ is exact in the Dolbeault complex: there is a smooth $(0,q-1)$-form $\zeta$ with $\bar\partial\zeta=\eta$ ([[cor-dolbeault-vanishing-pseudoconvex-domain]], claim 1).

[F6] Let $U\subseteq\mathbb C^m$ be open and $f:U\to\mathbb C$ of class $C^1$. Then $f$ is complex differentiable at $a\in U$ if and only if $\partial_{\bar z_k}f(a)=0$ for every $k<m$ (clause 3 of [[thm-cauchy-riemann-characterization-in-several-complex-variables]]); a function is holomorphic on $U$ when it is complex differentiable at every point of $U$ ([[def-holomorphic-function-in-several-complex-variables]]).

[F7] On smooth complex-valued forms $d=\partial+\bar\partial$ and $\bar\partial^2=0$ ([[thm-d-dbar-decomposition-and-identities]]); on a $(p,q)$-form $\eta=\sum_{I,J}a_{I,J}\,dz^I\wedge d\bar z^J$ one has $\bar\partial\eta=\sum_{I,J,j}(\partial_{\bar z_j}a_{I,J})\,d\bar z_j\wedge dz^I\wedge d\bar z^J$, and components outside the bidegree range $0\le p,q\le n$ are zero ([[def-bigraded-complex-differential-forms]]).

[F8] AC is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); in ZF, AC implies the Axiom of Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]), which selects one element from each family of nonempty sets indexed by $\mathbb N$ ([[def-countable-choice]]).

**Choice use.** AC is the ambient hypothesis of the corollary. The partition-of-unity lemma [F4] selects cover members over its shell construction using AC and uses its countable instance for the finite lists and bumps; [F8] supplies that implication. This proof makes no additional selection.

## Proof

**Proof technique:** direct.

1.1 Apply [F4] to the cover $(U_i)_{i\in I}$: let $(V_k)_{k\in\mathbb N}$ be the resulting locally finite refinement with $V_k\subseteq U_{i(k)}$, and let $\chi_k\in C^\infty(\Omega)$ be the associated smooth partition of unity with $0\le\chi_k\le1$, $\operatorname{supp}\chi_k\subseteq V_k$, locally finite supports and $\sum_k\chi_k=1$ on $\Omega$. The countable-choice hypothesis of [F4] is discharged by the implication $\mathrm{AC}\Rightarrow\mathrm{AC}_\omega$ from [F8]. [F4, F8, given]

1.2 For each fixed $j\in I$ define $f_j:=\sum_k\chi_k\,(m_j-m_{i(k)})$ on $U_j$ as follows. By hypothesis the difference $m_j-m_{i(k)}$ is holomorphic on $U_j\cap U_{i(k)}$, a set containing $V_k\cap U_j$; multiplying by the cutoff $\chi_k$, which vanishes outside $V_k$, extends it by zero to a smooth function on $U_j$, and the family $(\operatorname{supp}\chi_k)$ is locally finite, so every point of $U_j$ has a neighbourhood on which only finitely many terms are nonzero; hence the sum $f_j$ is a well-defined element of $C^\infty(U_j)$. [F2, F4, given, algebra]

2.1 For $j,l\in I$, evaluate on the dense open set where all relevant meromorphic representatives are defined. There each summand of $f_j-f_l$ equals $\chi_k(m_j-m_l)$, so $f_j-f_l=(\sum_k\chi_k)(m_j-m_l)=m_j-m_l$ there. The left side is continuous, and the right side has the given holomorphic extension to $U_j\cap U_l$. Equality on the dense set and continuity give equality everywhere with that extension; in particular $f_j-f_l$ is holomorphic on the overlap. [F2, step 1.2, given, algebra]

3.1 Define $\eta$ on $U_j$ by $\eta:=\bar\partial f_j$, a smooth $(0,1)$-form on $U_j$ by [F7] and step 1.2. For $j,l\in I$ the identity $f_j-f_l=m_j-m_l$ of step 2.1 gives $\bar\partial f_j-\bar\partial f_l=\bar\partial(m_j-m_l)$ on $U_j\cap U_l$, and $m_j-m_l$ is holomorphic there, so $\bar\partial(m_j-m_l)=0$ by the Cauchy-Riemann system [F6] and [F7]. Hence $\bar\partial f_j=\bar\partial f_l$ on every overlap, so the local definitions glue to a well-defined smooth $(0,1)$-form $\eta\in\Omega^{0,1}(\Omega)$. [F6, F7, step 2.1, step 1.2]

4.1 On each $U_j$ one has $\eta=\bar\partial f_j$ with $f_j$ smooth, hence $\bar\partial\eta=\bar\partial^2f_j=0$ on $U_j$ by [F7]; therefore $\eta$ is a smooth $\bar\partial$-closed $(0,1)$-form on $\Omega$. [F7, step 3.1]

5.1 Since $\Omega$ is Hartogs pseudoconvex and $\eta\in\Omega^{0,1}(\Omega)$ is smooth and $\bar\partial$-closed, [F5] with $q=1$ provides $\psi\in\Omega^{0,0}(\Omega)$ with $\bar\partial\psi=\eta$; by the conventions of [F7] the space $\Omega^{0,0}(\Omega)$ is the space $C^\infty(\Omega)$ of smooth functions, so $\psi$ is a smooth function on $\Omega$. [F1, F5, F7, step 4.1]

6.1 For each $j\in I$ put $F_j:=f_j-\psi$ on $U_j$, a smooth function by step 1.2 and step 5.1; then $\bar\partial F_j=\bar\partial f_j-\bar\partial\psi=\eta-\eta=0$ on $U_j$ by step 3.1 and step 5.1. Since $F_j$ is $C^1$, the Cauchy-Riemann system [F6] makes $F_j$ complex differentiable at every point of $U_j$, that is, holomorphic on $U_j$. [F6, step 3.1, step 5.1, given]

7.1 Let $D_i\subseteq U_i$ be the open dense domain of the representative $m_i$ and put $D_G:=\bigcup_iD_i$, an open dense subset of $\Omega$. Define $G:D_G\to\mathbb C$ by $G(z):=m_i(z)-F_i(z)$ when $z\in D_i$. On $D_i\cap D_j$, the compatibility of the meromorphic differences and step 2.1 give $(m_i-F_i)-(m_j-F_j)=(m_i-m_j)-(f_i-f_j)=0$, so $G$ is well defined. It is holomorphic on $D_G$ because each local expression is holomorphic there. Near any point choose a chart $U_i$ and a local ratio $m_i=f/g$ on $W\subseteq U_i$. On the dense open set $D_i\cap W\cap\{g\ne0\}$ one has $G=(f-gF_i)/g$; both sides are holomorphic on $D_G\cap W\cap\{g\ne0\}$, so continuity extends this identity there. Thus $G$ has the required local ratio and [F3] makes it meromorphic on $\Omega$. [F2, F3, step 2.1, step 6.1, given, algebra]

8.1 Finally $G-m_j=-F_j$ on the common domain $D_G\cap D_j=D_j$ for every $j\in I$ by the definition of $G$, and $-F_j$ is a holomorphic extension to $U_j$ by step 6.1; thus the meromorphic function $G$ realizes the prescribed principal parts $(m_i)_{i\in I}$, as asserted. [step 6.1, step 7.1] $\square$

## Remarks

**Local finiteness is not needed.** The proof uses the locally finite cover $(U_i)$ only as an input to the partition-of-unity lemma [F4], whose output is locally finite for an arbitrary open cover; the argument is verbatim valid for an arbitrary open cover $(U_i)_{i\in I}$ with compatible meromorphic data, and the locally finite case stated here is the form promised by the scaffold.

**Why the pseudoconvexity enters.** The only analytic input is the smooth solvability of the $\bar\partial$-equation for $(0,1)$-forms on $\Omega$, supplied here by [F5]. On the ball or on a polydisc this is the classical Dolbeault lemma; on a general Hartogs pseudoconvex domain it is the content of the in-pair corollary, and it is exactly the hypothesis that fails on $\mathbb C^2\setminus\{0\}$, where the Cousin-I data $1/(zw)$ on the two coordinate complements is not solvable.

**Holomorphy of the correction.** The smooth solution $\psi$ of $\bar\partial\psi=\eta$ is used, not merely an $L^2$ solution: the local corrections $F_j=f_j-\psi$ must be $C^1$ so that the Cauchy-Riemann system [F6] applies, and this is why the smooth branch of the vanishing corollary [F5] is invoked.
