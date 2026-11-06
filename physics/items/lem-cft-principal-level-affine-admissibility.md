---
id: lem-cft-principal-level-affine-admissibility
kind: lemma
title: "Principal-level arithmetic implies affine vacuum admissibility"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-root-data-for-principal-w-levels
  - def-untwisted-affine-central-extension
  - def-real-and-imaginary-kac-moody-roots
  - thm-classification-of-irreducible-reduced-crystallographic-root-systems
  - def-cft-principal-admissible-level
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - def-null-root-central-coroot-and-affine-level
  - lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
  - thm-loop-and-affine-gcm-presentations-are-isomorphic
dependency_roles:
  def-cft-root-data-for-principal-w-levels: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-real-and-imaginary-kac-moody-roots: mathematical-premise
  thm-classification-of-irreducible-reduced-crystallographic-root-systems: mathematical-premise
  def-cft-principal-admissible-level: mathematical-premise
  def-degree-derivation-and-full-untwisted-affine-algebra: mathematical-premise
  def-null-root-central-coroot-and-affine-level: mathematical-premise
  lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root: mathematical-premise
  thm-loop-and-affine-gcm-presentations-are-isomorphic: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Tomoyuki Arakawa, Rationality of admissible affine vertex algebras in the category O"
      url: https://arxiv.org/pdf/1207.4857v4
      locator: "The indicated affine claim is reconstructed locally; references do not replace the proof."
dependency_level: 4
---

## Statement

Let $\mathfrak g$ be finite-dimensional complex simple, normalize long roots to squared length $2$, and write $h,h^\vee,r$ for its Coxeter, dual Coxeter and lacing numbers. Let $p,q>0$ be coprime, $k+h^\vee=p/q$, and suppose $p\ge h^\vee$ when $\gcd(q,r)=1$, or $p\ge h$ when $\gcd(q,r)=r$. For an affine weight $\lambda$, put
$$\widehat\Delta(\lambda)=\{\alpha\in\widehat\Delta^{\rm re}:\langle\lambda+\widehat\rho,\alpha^\vee\rangle\in\mathbb Z\}.$$
Here $\lambda$ is **admissible** if
$$\langle\lambda+\widehat\rho,\alpha^\vee\rangle\notin\{0,-1,-2,\ldots\}\quad(\alpha\in\widehat\Delta^{\rm re}_+),\qquad \mathbb Q\widehat\Delta(\lambda)=\mathbb Q\widehat\Delta^{\rm re}.$$
Then $k\Lambda_0$ is admissible in this explicit sense. Its integral real roots have full rational span and loop periods $q$ on long roots and $q/\gcd(q,r)$ on short roots. Their positive simple system consists of the finite simple roots and $-\theta+q\delta$ in the coprime branch, or $-\theta_s+(q/r)\delta$ in the coprincipal branch. In particular every level satisfying the nondegenerate principal-admissible predicate is an admissible number and is noncritical. This does not identify its additional denominator thresholds with all admissible levels.

## Statement references

[[def-cft-principal-admissible-level]]

## Facts & Assumptions

**Given:** The objects, normalizations and hypotheses in the Statement.

[F1] [[def-cft-root-data-for-principal-w-levels]] supplies the normalized finite root datum, $h,h^\vee,r$ and the supplied-data convention for the dual datum. We use the root order $\beta\le\gamma$ when $\gamma-\beta$ is a nonnegative integral combination of the chosen finite simple roots; the dual root order uses the simple coroots in the same way. The notation $\theta_s$ in the Statement means the unique greatest positive short root in this order; its existence and uniqueness are verified in step 3.1. When all roots have the same length, set $\theta_s=\theta$.

[F2] [[def-untwisted-affine-central-extension]] fixes the normalized current bracket. [[def-degree-derivation-and-full-untwisted-affine-algebra]] adjoins $d$ with $[d,x_m]=mx_m$; [[def-null-root-central-coroot-and-affine-level]] defines $\widehat{\mathfrak h}=\mathfrak h\oplus\mathbb CK\oplus\mathbb Cd$ (writing $K=c$), finite roots extended by zero on $K,d$, and $\delta(d)=1$, $\delta|_{\mathfrak h\oplus\mathbb CK}=0$. [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]] and [[thm-loop-and-affine-gcm-presentations-are-isomorphic]] identify the current realization with the affine simple data $\alpha_0=\delta-\theta$, $\alpha_0^\vee=K-\theta^\vee$. Define $\Lambda_0|_{\mathfrak h\oplus\mathbb Cd}=0$, $\Lambda_0(K)=1$, and $\widehat\rho=\rho+h^\vee\Lambda_0$, so $\widehat\rho(\alpha_i^\vee)=1$ for every affine simple coroot. The real-root convention of [[def-real-and-imaginary-kac-moody-roots]] is their Weyl orbit; in these current coordinates the real root spaces are $\mathfrak g_\alpha\otimes t^n$, with roots $\alpha+n\delta$. Their coroot formula is checked from the normalized bracket in step 4.1.

[F3] [[thm-classification-of-irreducible-reduced-crystallographic-root-systems]] exhausts the finite types. The numerical short-root check below is a local coordinate calculation in those finite types.

[F4] [[def-cft-principal-admissible-level]] includes the numerator and gcd inequalities above; its extra denominator bounds are retained.

## Proof


1.1 **Root heights.** For a positive long root $\alpha, \rho(\alpha^\vee)\le \rho(\theta^\vee)=h^\vee-1$ because theta-alpha is a nonnegative simple-root combination and rho pairs positively with every finite simple root under the normalized form. For a short root $\alpha, \rho(\alpha^\vee)=r(\rho,\alpha)\le r(h^\vee-1)$. These bounds already suffice in the coprime case. [given, F1, F2, F3, F4, algebra]

2.1 For the coprincipal case, the maximum short-coroot height is h-1. The finite irreducible classification leaves only $B_{n},C_{n},F4,G2$ when $r>1$. This numerical identity can be checked directly from the following simple-root and simple-coroot coordinates, in the usual arrow convention; the entries list theta, theta-coroot and theta_s-coroot respectively: `B_n: (1,2,...,2), (1,2,...,2,1), (2,2,...,2,1); C_n: (2,...,2,1), (1,...,1), (1,2,...,2); F4:  (2,3,4,2), (2,3,2,1), (2,4,3,2); G2:  (3,2), (1,2), (2,3), with the first simple root short.` [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 For $B_{n}$ use roots $±e_{i},±e_{i}±e_{j}$; for $C_{n}$ use $±2e_{i},±e_{i}±e_{j}$; their standard simple differences and final simple root give the displayed coefficients by telescoping. For F4 use simple roots e2-e3,e3-e4,e4,(e1-e2-e3-e4)/2, with $\theta=e1+e2$ and $\theta_{s}=e1$; substitution gives all three rows. For G2 take alpha1 short, alpha2 long with Cartan off-diagonals -3,-1; the root-string list gives $\theta=3\alpha1+2\alpha2$ and $\theta_{s}=2\alpha1+\alpha2$, giving the last row. These are the corresponding finite classified diagrams, so they cover every non-simply-laced case, including B2=C2. For clarity, use $B_n$ for $n\ge2$ and $C_n$ for $n\ge3$, retaining $C_2=B_2$; their simple roots are $e_i-e_{i+1}$ followed by $e_n$ and $2e_n$, respectively. Their greatest positive short roots are $e_1$ and $e_1+e_2$. In $B_n$ the positive short roots are $e_i$, and $e_1-e_i$ is a nonnegative sum of simple differences. In $C_n$ they are $e_i-e_j$ and $e_i+e_j$ for $i<j$: their simple coordinates are respectively $1$ on $i,\ldots,j-1$, and $1$ on $i,\ldots,j-1$, $2$ on $j,\ldots,n-1$, $1$ on $n$. Each is coordinatewise bounded by $(1,2,\ldots,2,1)$, the coordinates of $e_1+e_2$. For $F_4$, the short roots are $\pm e_i$ and $\tfrac12(\pm e_1\pm e_2\pm e_3\pm e_4)$ with all signs allowed. A vector with Euclidean coordinates $(x_1,x_2,x_3,x_4)$ has simple coordinates $(x_1+x_2,2x_1+x_2+x_3,3x_1+x_2+x_3+x_4,2x_1)$; for every short root these are bounded above by $(1,2,3,2)$, the coordinates of $e_1$. For $G_2$ with $\alpha_1$ short, its positive short roots are $\alpha_1,\alpha_1+\alpha_2,2\alpha_1+\alpha_2$. Hence the specified $\theta_s$ exists and dominates every positive short root in each case; antisymmetry of the simple-root order gives uniqueness. Coroot coordinates satisfy $\beta^\vee=\sum_i n_i(\alpha_i,\alpha_i)/(\beta,\beta)\,\alpha_i^\vee$ for $\beta=\sum_i n_i\alpha_i$. Thus the short-root coordinate bounds also bound every positive short coroot by $\theta_s^\vee$. Every long root is bounded by $\theta$, so its coroot is bounded by $\theta^\vee$; the displayed table gives $\theta^\vee\le\theta_s^\vee$. Therefore $\theta_s^\vee$ is the highest root of the entire dual root system, not just a candidate among its long roots. Thus every positive short-coroot height is bounded by that row's sum. The sums are 2n-1,2n-1,11,5, exactly h-1. Also $h^\vee\le h$ follows directly from the theta coefficients: theta-coroot has coefficient $a_{i}(\alpha_{i},\alpha_{i})/2\le a_{i}$. [given, F1, F2, F3, F4, step 2.1, algebra]

4.1 **Integral real roots and regularity.** Normalize opposite finite root vectors by $[e_\alpha,f_\alpha]=\alpha^\vee$. Invariance gives $B(e_\alpha,f_\alpha)=2/(\alpha,\alpha)=r_\alpha$, and the current bracket gives $[e_\alpha\otimes t^n,f_\alpha\otimes t^{-n}]=\alpha^\vee+r_\alpha nK$. This is the coroot of $\beta=\alpha+n\delta$, since $\beta$ evaluates to $2$ on it. Thus $\langle k\Lambda_0+\widehat\rho,\beta^\vee\rangle=\rho(\alpha^\vee)+r_\alpha np/q$, with $r_\alpha=1$ on long roots and $r$ on short roots. [given, F1, F2, F3, F4, step 3.1, algebra]

5.1 where $r_{\alpha}=1$ or r. The finite term is integral. Thus long roots occur exactly at n in qZ, short roots at n in (q/gcd(q,r))Z. Finite roots are all integral. Their span together with any long alpha+q delta contains q delta, so the rational span is full. [given, F1, F2, F3, F4, step 3.1, step 4.1, algebra]

6.1 If $n=0$ and beta is positive, its pairing is positive. A nonintegral pairing is not a nonpositive integer. For the remaining positive integral roots $n>0$, the least positive affine term is p on long roots. In the coprime branch it is rp on short roots; the preceding bounds make both resulting pairings strictly positive. In the coprincipal branch it is p on short roots too, and $p\ge h$ exceeds the maximum short-coroot height h-1; the long bound is at most $h^\vee-1\le h-1$. This proves regular dominance and therefore vacuum admissibility. [given, F1, F2, F3, F4, step 3.1, step 5.1, algebra]

7.1 In the coprime branch the real root system is the untwisted finite root system with delta replaced by q delta, so its simple roots are alpha_i and -theta+q delta. In the coprincipal branch take coroots: every finite coroot direction has loop period qK, because a short root's q/r step is multiplied by r in its coroot. The coroot system is therefore the standard untwisted affine system of the dual finite root system. Its highest root is theta_s-coroot, giving original simple roots alpha_i and -theta_s+(q/r)delta. This uses the dual finite ROOT DATUM, not an unproved existence of a dual Lie algebra. It also shows directly that the integral reflection group is affine and contains translations q Q-coroot. [given, F1, F2, F3, F4, step 3.1, step 6.1, algebra]

8.1 **Application to the actual level definition.** The supplied principal-W nondegenerate level tests include exactly the p inequalities and gcd branches just used. Their additional q bounds do not change this implication. Positivity of p/q gives noncriticality. Hence every level in the actual definition satisfies the source admissible-number hypothesis, with the stated integral roots and simple system. Positive integral admissible levels $q=1$ demonstrate why the stronger nondegenerate predicate must not be advertised as equivalent to all admissible numbers. [given, F1, F2, F3, F4, step 3.1, step 7.1, algebra] ∎
