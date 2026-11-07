---
dependency_level: 1
id: lem-dnl-partition-subgroup-ergodicity-zero-one
kind: lemma
title: "Partition action ergodicity and normalized approximation zero-one laws"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-sl-integer-lattice-has-finite-covolume
  - lem-sl-unipotent-fixed-vector-is-group-fixed
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-bezout-identity
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
sources:
  references:
    - title: "Dani, Laurent and Nogueira, Multi-dimensional metric approximation by primitive points, §2"
      url: "https://arxiv.org/pdf/1310.5535v2"
    - title: "Dave Witte Morris, Introduction to Arithmetic Groups, §§7.1–7.3 and11.2; the specialized root-subgroup argument is locally proved"
      url: "https://arxiv.org/pdf/math/0106063"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$, and let $\pi$ partition the ordered integer coordinates $(p_1,\ldots,p_m,q_1,\ldots,q_n)$ into blocks of size at least $m+1$. Let $O$ be the integer tuples having coordinate gcd one in every block. Let $\Gamma_\pi$ be the product of the integer special linear groups acting separately on these blocks. Its right action on $\operatorname{Mat}_{m,m+n}(\mathbb R)$ is ergodic for Lebesgue measure: every measurable invariant set is null or conull.

Let $\psi:\mathbb N\to(0,\infty)$ be non-increasing. For $l\ge1$ put $\psi_l(h)=\psi(lh)$, and let $E(\psi;y)$ consist of the real $m$-by-$n$ matrices $\Theta$ for which $\|\Theta q+p-y\|_\infty\le\psi(\|q\|_\infty)$ holds for infinitely many $(p,q)\in O$ with $q\ne0$. Define $E(\psi)=\{(\Theta,y):\Theta\in E(\psi;y)\}$. Each of the two sets

$$\bigcap_{l\ge1}\bigcup_{\kappa\ge1} E(\kappa\psi_l;0),\qquad \bigcap_{l\ge1}\bigcup_{\kappa\ge1} E(\kappa\psi_l)$$

is null or conull in its full real matrix or matrix-and-target space. The unions are over positive integers $\kappa$.

## Statement references

[Dani–Laurent–Nogueira, §2, Propositions 2.1–2.4](https://arxiv.org/pdf/1310.5535v2)

## Facts & Assumptions

**Given:** Countable Choice, the dimensions, partition, primitive set, group, and positive non-increasing function in the Statement.

[A1] Countable Choice supports countable measure operations, product integration, and smooth changes of coordinates preserving null sets. ([[def-countable-choice]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F1] $\mathrm{SL}_d(\mathbb R)/\mathrm{SL}_d(\mathbb Z)$ has finite positive invariant smooth measure; its left action on $L^2$ is strongly continuous and unitary, and null sets lift exactly to Haar-null sets. ([[lem-sl-integer-lattice-has-finite-covolume]])

[F2] A vector fixed by an elementary one-parameter unipotent subgroup in a strongly continuous unitary representation of $\mathrm{SL}_d(\mathbb R)$ is fixed by the whole group. ([[lem-sl-unipotent-fixed-vector-is-group-fixed]])

[F3] Smooth compactly supported functions are dense in Euclidean $L^2$; in smooth quotient charts this gives the same approximation after multiplying by the square root of the positive smooth density. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]])

[F4] Bézout reduction extends a primitive integer tuple to an integer basis, and determinant-one coordinate operations send it to the first coordinate vector. ([[thm-bezout-identity]])

## Proof

1.1 Fix $d>m$ and let $P:G=\mathrm{SL}_d(\mathbb R)\to\operatorname{Mat}_{m,d}(\mathbb R)$ take the first $m$ rows. Its image is exactly the full-row-rank matrices: complete those rows to an invertible square matrix and scale one of the remaining rows to make determinant one. The stabilizer of $P(I)$ under right multiplication is $H=\{\begin{pmatrix}I_m&0\\ B&C\end{pmatrix}:\det C=1\}$, and $P$ identifies the full-rank space with $H\backslash G$. This identification preserves measure classes. Indeed, near any matrix with a specified nonzero $m$-minor, complete using the complementary coordinate rows and divide one remaining row by the resulting nonzero determinant. This gives a smooth local section, and $(h,M)\mapsto h s(M)$ gives local product coordinates on $G$ with a positive smooth volume density. Fubini proves that a base set is Lebesgue null exactly when its inverse image is Haar null. The rank-deficient complement is null: it is contained in the zero set of one nonzero minor polynomial, and a nonzero polynomial has a null zero set by induction on the variables, using finite root sets in the last variable and Fubini. [given, A1, algebra]

2.1 Lift the indicator of a right-$\mathrm{SL}_d(\mathbb Z)$-invariant measurable subset of the full-rank space to $G$. The lift is left-$H$ invariant and right-$\mathrm{SL}_d(\mathbb Z)$ invariant, hence defines a bounded $L^2$ function on $G/\mathrm{SL}_d(\mathbb Z)$ by [F1]. If invariance originally holds only modulo null sets, the countability of the integer group lets us discard its saturated exceptional null set; this set is also left-$H$ invariant because the lift is. Thus the descended $L^2$ vector is $H$ invariant. The subgroup $H$ contains $I+t e_{m+1,1}$ for every real $t$. By [F2] the vector is $G$ invariant. Such a vector is constant almost everywhere: its lift $f$ obeys $f(gh)=f(h)$ for almost every $h$ for each $g$; Fubini and the smooth measure-class-preserving substitution $(g,h)\mapsto(gh,h)$ imply $f(u)=f(h)$ for almost every pair $(u,h)$, and another Fubini application makes $f$ constant. All statements about quotient $L^2$ can be checked in its countably many charts; [F3] and compact approximation justify the strong continuity as in [F1]. Since the original function is an indicator, its constant is zero or one. This proves ergodicity on $\operatorname{Mat}_{m,d}(\mathbb R)$. [step 1.1, A1, F1, F2, F3, algebra]

3.1 Decompose a matrix into its column blocks. The full-rank-in-each-block subset is conull by step 1.1. Each factor action is ergodic by step 2.1 since every block size exceeds $m$. The product action is ergodic: by Fubini and countability of each integer group, almost every section in the first block is invariant and hence has constant indicator; its value is a measurable zero-one function of the remaining blocks (obtain it by integrating over a fixed finite positive-measure box with a positive integrable density). Repeat for the remaining finitely many blocks. Thus the full product indicator is constant almost everywhere. Moreover $O$ is a single $\Gamma_\pi$ orbit: use [F4] in each block to send any primitive tuple to the first vector of that block, and reverse the same operation for another primitive tuple. The action preserves the block gcd condition. [step 2.1, A1, F4, algebra]

4.1 Write $M=(\Phi,\Theta)$ with $\Phi$ an $m$-by-$m$ matrix on the first $m$ coordinates. For fixed $y$, let $G(\psi;y)$ be the limsup in the full matrix space of $\|\Phi p+\Theta q-y\|_\infty\le\psi(\|q\|_\infty)$ over $(p,q)\in O$, $q\ne0$, and put $H_y=\bigcap_{l\ge1}\bigcup_{\kappa\ge1}G(\kappa\psi_l;y)$. Restrict to the conull invariant set of $M$ for which the $\Phi$ block of every $M\gamma$, $\gamma\in\Gamma_\pi$, is invertible. This is conull since each excluded determinant is a nonzero polynomial and $\Gamma_\pi$ is countable. For an approximating sequence at $M$ on this set, boundedness of $\psi$ and invertibility of $\Phi$ imply $\|p\|\le C_M\|q\|$ for large $\|q\|$; bounded $q$ permits only finitely many $p$. For a fixed $\gamma$, write $(p',q')=\gamma(p,q)$. Then $\|q'\|\le A\|q\|$ for a positive integer $A$ and all sufficiently large solutions. At $M\gamma^{-1}$ the same left-hand vector is obtained, and its invertible $\Phi$ block shows that infinitely many transformed solutions have unbounded $q'$. Given $l$, use membership in $G(\kappa\psi_{Al};y)$; monotonicity gives $\psi(Al\|q\|)\le\psi(l\|q'\|)$. Thus $M\gamma^{-1}\in G(\kappa\psi_l;y)$. Applying the same reasoning to $\gamma^{-1}$ proves that $H_y$ is invariant modulo a null set. Hence it is null or conull by step 3.1. [given, step 3.1, A1, algebra]

5.1 For $g\in\mathrm{GL}_m(\mathbb R)$, norm bounds in both directions, absorbed into the integer constants $\kappa$, give $gH_y=H_{gy}$. The group is transitive on nonzero targets, so the null-or-conull status of $H_y$ is the same for every $y\ne0$. Consequently $\mathcal H=\{(M,y):M\in H_y\}$ is null or conull by Fubini; the exceptional singleton target $0$ has measure zero. Independently, $H_0$ is null or conull. [step 4.1, A1, algebra]

6.1 For any fixed invertible $\Phi$, the substitution $(\Theta,y)\mapsto(\Phi^{-1}\Theta,\Phi^{-1}y)$ and its inverse transform the defining inequalities into normalized inequalities with coefficient of $p$ equal to $I_m$, changing only the allowed constant $\kappa$. Thus the section of $\mathcal H$ at any invertible $\Phi$ is a linear image of $\bigcap_l\bigcup_\kappa E(\kappa\psi_l)$, with exactly the same null-or-conull status. Since singular $\Phi$ form a null set, Fubini and step 5.1 prove the doubly metric zero-one assertion. For $H_0$ the identical argument uses $\Theta\mapsto\Phi^{-1}\Theta$ with target zero, proving the homogeneous assertion. No evaluation of an almost-everywhere assertion at a prescribed null slice is used: all invertible-$\Phi$ sections are explicitly related before Fubini is applied. [step 5.1, A1, algebra] ∎
