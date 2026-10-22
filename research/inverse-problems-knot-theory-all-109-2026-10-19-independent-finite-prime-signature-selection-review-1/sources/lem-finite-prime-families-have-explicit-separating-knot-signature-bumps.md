---
id: lem-finite-prime-families-have-explicit-separating-knot-signature-bumps
kind: lemma
title: Finite prime families admit explicit separating knot signature bumps
status: draft
origin: session
deps: [lem-explicit-integral-seifert-matrices-realize-arbitrarily-small-signature-bumps, lem-finite-standard-skew-seifert-matrices-have-choice-free-disk-band-realizations]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Lemma4.5, printed page11
    - title: Cha, Structure of the string link concordance group and Hirzebruch-type invariants
      url: https://arxiv.org/pdf/0709.2968
      locator: Lemma5.6
---

## Statement

Supply distinct odd primes $p_1,\ldots,p_m$ with $m\ge1$ and positive real numbers $C_1,\ldots,C_m$. Put $\omega_j=\exp(2\pi i/p_j)$. A finite construction gives smooth oriented knots $K_1,\ldots,K_m$, each with a supplied connected one-boundary oriented Seifert surface and ordered integral basis with exact positive-push matrix $V_i$. Define its chosen-surface signature function by
$$s_i(z)=\operatorname{sign}\bigl((1-z)V_i+(1-\bar z)V_i^T\bigr),\qquad z\in S^1.$$
There are positive integers $N_i$ such that
$$s_i(\omega_i)=s_i(\omega_i^{-1})=2N_i>C_i,$$
while $s_i(\omega_i^r)=0$ when $r\not\equiv\pm1\pmod{p_i}$, and $s_i(\omega_j^r)=0$ for all integers $r$ when $j\ne i$. Each $s_i$ is nonnegative on the entire unit circle. In particular,
$$\frac1{p_i}\sum_{r=0}^{p_i-1}s_i(\omega_i^r)=\frac{4N_i}{p_i}>\frac{2C_i}{p_i},\qquad \frac1{p_j}\sum_{r=0}^{p_j-1}s_i(\omega_j^r)=0\quad(j\ne i).$$
The surface for $K_i$ has genus $4N_i$. No choice principle, concordance classification, cabling formula, signature-to-rho formula or uniform analytic bound is assumed.

## Facts & Assumptions

**Given:** The finite prime list and real target heights.

[F1] For any angle in $(0,\pi)$ and containing open interval, an explicit integral $8\times8$ matrix has signature two at that angle, signature zero outside that interval in $[0,\pi]$, nonnegative signature everywhere and conjugate symmetry. Its two four-dimensional blocks have standard skew matrices with opposite signs. Its proof establishes finite inertia invariance under congruence and block-sum additivity. [[lem-explicit-integral-seifert-matrices-realize-arbitrarily-small-signature-bumps]]

[F2] Any integral matrix with fixed standard symplectic skew part has a finite smooth disk-band realization with its exact positive-push matrix, one boundary component and specified basis, without choice. [[lem-finite-standard-skew-seifert-matrices-have-choice-free-disk-band-realizations]]

## Proof

1.1 Let $\Theta$ be the finite set $\{0,\pi\}\cup\{2\pi r/p_j:1\le j\le m,\ 1\le r\le(p_j-1)/2\}$. All displayed interior angles are distinct except when both indices and residues agree: equality $r/p_j=s/p_\ell$ for distinct primes would force $p_j$ to divide $r$ or $p_\ell$, impossible in the stated residue ranges. The target $\theta_i=2\pi/p_i$ is one of these interior angles. Its distance from every other member of $\Theta$ is positive; let $\delta_i$ be one third of the finite minimum of these distances. Thus $I_i=(\theta_i-\delta_i,\theta_i+\delta_i)\subset(0,\pi)$ contains none of the other angles in $\Theta$. Choose the least positive integer $N_i$ with $2N_i>C_i$, which exists by the Archimedean property of the reals. All these are finite operations on the supplied list. [given, construct, algebra]

2.1 Use [F1] with $\theta_i,I_i$ to obtain the exact matrix $B_i$ there, and let $\widetilde V_i$ be the block sum of $N_i$ copies of $B_i$. Its signature is $N_i$ times that of $B_i$ by finite inertia additivity. In each positive four-dimensional skew block reorder $(e_1,e_2,f_1,f_2)$ as $(e_1,f_1,e_2,f_2)$; in each negative skew block use $(e_1,-f_1,e_2,-f_2)$. Their block sum is an explicit signed permutation $P_i$ for which $V_i=P_i^T\widetilde V_iP_i$ has standard symplectic skew part. Congruence preserves every Hermitian signature by [F1]. Apply [F2] with $g=4N_i$ to realize exactly $V_i$ on an actual smooth one-boundary surface, whose oriented boundary is $K_i$. Thus the constructed knot and chosen matrix have the required nonnegative, conjugate-symmetric signature function, equal to $2N_i$ at $\omega_i$. No mirroring or change of knot orientation is needed to make its sign positive. [F1, F2, step 1.1, construct, algebra]

3.1 At any nonidentity $p_j$-th root, complex conjugation puts its angle in $\Theta\setminus\{0,\pi\}$. If $j\ne i$, that angle is outside $I_i$, so its signature is zero by [F1]. If $j=i$, only the residues $r\equiv\pm1$ give the angle $\theta_i$; every other nonidentity residue gives another angle of $\Theta$ outside $I_i$ and has signature zero. At the identity all Hermitian matrices in the definition are zero, so their signature is zero as well. The two residues $\pm1$ are distinct because $p_i$ is odd. Their values are both $2N_i$, so summing the exact finite list gives the displayed averages, with no integration or analytic identification. These constructions and the matrix-realization choices are finite and explicit; the statement concerns the actual supplied Seifert surfaces. This proves the full finite separation and height assertions. [F1, F2, step 1.1, step 2.1, algebra] ∎
