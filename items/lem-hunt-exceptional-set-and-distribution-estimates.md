---
id: "lem-hunt-exceptional-set-and-distribution-estimates"
kind: "lemma"
title: "Hunt exceptional set and distribution estimates"
deps: ["def-carleson-tiles-wave-packets-and-tile-order", "def-density-size-and-tree-count-for-carleson-tiles", "lem-carleson-signed-tree-weak-one-one-estimate", "lem-carleson-density-selection", "lem-carleson-size-selection", "lem-carleson-single-tree-estimate", "thm-hardy-littlewood-maximal-inequality-for-balls", "thm-layer-cake-formula-for-l-p-powers", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "thm-monotone-convergence-for-the-integral", "def-axiom-of-choice"]
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Section 7.1–7.2, Proposition 7.1, Lemma 7.10
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. Let E,F be measurable subsets of the line with $0<e=m(E)<\infty$ and $0<h=m(F)<\infty$. There is a measurable $F'\subseteq F$ with $m(F')\ge h/2$, depending only on E,F, such that for every finite tile family S, measurable selector N, and measurable complex inputs $|f|\le\mathbf1_E$, $|g|\le\mathbf1_{F'}$,
$$|\langle C_{S,N}f,g\rangle|\le C\min(e,h)(1+|\log(e/h)|).$$
The constant is independent of all these data. Consequently, for every $1<q<\infty$ there is $C_q$ independent of S,N,E such that
$$m\{|C_{S,N}\mathbf1_E|>\lambda\}\le C_q^q\lambda^{-q}m(E)\qquad(\lambda>0).$$
Thus the finite models are uniformly restricted weak type (q,q) at every such exponent.

## Facts & Assumptions

[F1] The exact fixed packets have nonnegative even transform psi, plateau a=1/9, support b=1/8, the dyadic plus-tree order and the finite testing form [[def-carleson-tiles-wave-packets-and-tile-order]].

[F2] Density is at most D=2/19, size is the supremum over all plus subtrees, singletons are allowed, and forest count sums designated top lengths [[def-density-size-and-tree-count-for-carleson-tiles]].

[F3] Every signed plus-tree packet projection has weak (1,1) bound with input weight $(1+|x-c(I_T)|/|I_T|)^{-20}$, uniformly in signs [[lem-carleson-signed-tree-weak-one-one-estimate]].

[F4] Density selection halves positive density at forest count cost at most $C\delta^{-1}m(F')$ [[lem-carleson-density-selection]].

[F5] Size selection halves positive size at forest count cost at most $C\sigma^{-2}\|f\|_2^2$ [[lem-carleson-size-selection]].

[F6] A tree's absolute testing contribution is at most its density times its size times $C|I_T|$ [[lem-carleson-single-tree-estimate]].

[F7] The centered maximal operator on the line satisfies $m\{Mu>t\}\le5\|u\|_1/t$ [[thm-hardy-littlewood-maximal-inequality-for-balls]].

[F8] Layer cake computes nonnegative integrals from level-set measures [[thm-layer-cake-formula-for-l-p-powers]].

[F9] Cauchy–Schwarz holds for complex functions, in particular on finite probability spaces [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F10] Nonnegative increasing integrands pass to the integral limit [[thm-monotone-convergence-for-the-integral]].

[F11] Assume AC [[def-axiom-of-choice]], supplying the countable-choice Fourier and maximal interfaces.

## Proof

**Given:** E,F,e,h,S,N,f as in the Statement. For an interval J put $w_J(x)=(1+|x-c(J)|/|J|)^{-20}$ and $\chi_J=|J|^{-1}w_J$. Write $a_s=\langle f,\phi_s\rangle$. All constants below depend only on the fixed packet until an exponent q is specified.

1.1 Two elementary weight facts will be used. First, for any interval J and z in J, $\int_E\chi_J\le C M\mathbf1_E(z)$. The weight centered at c(J) is comparable to the same weight centered at z, and on the centered annuli of radii $2^n|J|$ its integral is bounded by $C2^{-19n}M\mathbf1_E(z)$. Sum the geometric series, also including the inner interval. Second, the packet is bounded below on its spatial interval: for |u|<=1/2, the explicit inverse transform of the even nonnegative psi is $\phi(u)=\int\psi(\xi)\cos(2\pi u\xi)d\xi\ge(2/9)\cos(\pi/8)=c_0>0$. Therefore $|\phi_s(x)|\ge c_0|I_s|^{-1/2}$ on $I_s$. Both statements use the exact local plateau and support, not an unspecified wavelet lower bound. [F1, F7, given]

1.2 We record a capped forest sum for use on the remaining family R. If every coefficient of R is zero its form vanishes, so assume at least one is nonzero. Suppose its size is at most B>0, $\|f\|_2^2\le e$, and the testing set has measure at most h. Let $A=\max(B,\sqrt{e/h})$, $s_n=\min(B,A\,2^{-n})$ and $d_n=D4^{-n}$ for n>=0. Starting with R of size<=s_0=B and density<=d_0=D, first reduce density at step n to $d_{n+1}=d_n/4$ by at most two applications of F4 with the actual current density, applying it only above that target. Each application has count at most $Ch/d_{n+1}$. Then, if the remaining actual size exceeds $s_{n+1}$, apply F5 once. Because $s_{n+1}\ge s_n/2$, this reaches the next size target. Such an application cannot occur while $s_{n+1}=B$. When it does occur, $s_{n+1}=A\,2^{-(n+1)}$ and its count is at most $Ce/s_{n+1}^2\le Ch4^n$. The density removals also have total count at most $Ch4^n$. Every removed tree lies in the current remainder and therefore has size<=s_n and density<=d_n. The finite singleton lower bounds show termination on all nonzero coefficients: the minimum of $|a_s|/\sqrt{|I_s|}$ over the finitely many positive coefficients is positive, whereas s_n tends to zero. Thus finitely many recorded forests account for the entire form. [F2, F4, F5, given]

2.1 For any plus subtree U with top J, define $\Delta_U(x)^2=\sum_{s\in U}|a_s|^2|I_s|^{-1}\mathbf1_{I_s}(x)$. We claim $$m\{\Delta_U>\lambda\}\le C\lambda^{-1}\int_E w_J\qquad(\lambda>0).$$ Average over the finite probability space of all independent signs $\varepsilon_s=\pm1$ and set $Z(x)=\sum_s\varepsilon_sa_s\phi_s(x)$. At fixed x, $B(x)=\mathbb E|Z(x)|^2=\sum_s|a_s\phi_s(x)|^2$, and expansion of the fourth power gives $\mathbb E|Z(x)|^4\le3B(x)^2$: only indices occurring an even number of times survive, and the three pairings each contribute at most B squared. Cauchy–Schwarz gives $B\le B/2+(3B^2\mathbb P\{|Z|^2>B/2\})^{1/2}$, hence this probability is at least1/12 when B>0. By step 1.1, $B\ge c_0^2\Delta_U^2$. Thus on $\{\Delta_U>\lambda\}$ a fraction at least1/12 of the signs have $|Z|>c_0\lambda/\sqrt2$. Integrate this finite average and apply F3 to each signed projection. Since $|f|\le\mathbf1_E$, the claimed bound follows. No infinite random family or probabilistic limit is used. [F3, F9, step 1.1]

3.1 Here is an explicit subtree bootstrap. Suppose a collection R of tiles has, for every plus subtree U with every designated top J, the bound $m\{\Delta_U>\lambda\}\le C_0\alpha|J|/\lambda$, with alpha>0. Then $\operatorname{size}_f(R)\le C\alpha$. Fix U,J. At each spatial scale there is only one possible frequency ancestor of the top, so each spatial interval I labels at most one tile in U. Put $b_I=|a_s|^2/|I|$ for it, and put b_I=0 for the other dyadic subintervals. For b_I>0, the singleton bound at threshold $\sqrt{b_I}/2$ gives $b_I\le4C_0^2\alpha^2=B_0$. Subtrees with spatial intervals inside any dyadic Q contained in J are again plus trees: use Q as spatial top and the ancestor of the old top frequency of length1/|Q|. A member with interval Q may be the new top itself, which is allowed. [F1, F2, step 2.1]

4.1 Write $V(x)=\Delta_U(x)^2=\sum_{I\subseteq J}b_I\mathbf1_I(x)$. There are only finitely many nonzero b_I. For t>=0, descend the finite dyadic subdivision of J down to its smallest active scale and stop at the first interval Q on each branch where the sum of ancestor coefficients, including b_Q, exceeds t. These Q are disjoint and cover $\{V>t\}$. The stopped ancestor sum is at most t+B_0. On Q the remaining terms come from the strict descendants of Q, hence form a plus subtree to which the assumed weak square-function bound applies. Put $u=B_0+4C_0^2\alpha^2=8C_0^2\alpha^2$. The subset of Q where $V>t+u$ has measure at most $C_0\alpha|Q|/\sqrt{u-B_0}=|Q|/2$. Summing Q gives $m\{V>t+u\}\le\frac12m\{V>t\}$. Since $V$ is supported on J, induction gives $m\{V>nu\}\le2^{-n}|J|$ for n>=0. F8 therefore yields $\int V\le u\sum_{n\ge0}m\{V>nu\}\le2u|J|$. But $\int V=\sum_{s\in U}|a_s|^2$, so taking the supremum over U,J proves the size bound. Empty descendant subtrees contribute zero. This supplies the distribution bootstrap rather than assuming a John–Nirenberg theorem. [F2, F8, step 3.1]

5.1 Since $\int_Ew_J\le\int w_J=(2/19)|J|$, steps 2.1 through 4.1 show that every finite collection with $|f|\le\mathbf1_E$ has size at most an absolute constant B_* . If h<=e, take $F'=F$ and use this size bound. If h>e, set $\alpha=20e/h$, $\Omega=\{M\mathbf1_E>\alpha\}$ and $F'=F\setminus\Omega$. By F7, $m(\Omega)\le h/4$ and hence $m(F')\ge3h/4\ge h/2$. Let $S_{\rm out}=\{s\in S:I_s\not\subseteq\Omega\}$ and $S_{\rm in}=S\setminus S_{\rm out}$. Every nonempty plus subtree of $S_{\rm out}$ has a top J containing some member interval that meets $\Omega^c$. At such a point z in J, step 1.1 gives $\int_Ew_J\le C\alpha|J|$. Steps 2.1 through 4.1 now imply $\operatorname{size}_f(S_{\rm out})\le C\alpha\le C e/h$. These conclusions hold for every f bounded by the same indicator, and the chosen major subset depends only on E,F. [F7, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 We bound the inside tiles in the case h>e. For each spatial interval I occurring in $S_{\rm in}$ choose the greatest integer k>=0 such that the concentric dilation $2^kI$ is contained in Omega. It exists because I is contained and Omega has finite measure; its next dilation contains some point outside Omega. Weight comparison gives $\chi_I\le2^{k+1}\chi_{2^{k+1}I}$, so step 1.1 at such a point bounds $\int_E\chi_I\le C2^k\alpha$. Exponent20 packet decay then gives $|a_s|\le C\sqrt{|I|}2^k\alpha$ for every tile with this spatial interval. For fixed I, the upper frequency halves of all possible tiles are disjoint, so at each x at most one selector indicator is nonzero. Since $F'\subseteq\Omega^c\subseteq(2^kI)^c$, summing the absolute testing contributions of all these tiles gives at most $$C\alpha2^k|I|\int_{(2^kI)^c}\chi_I\le C\alpha2^{-18k}|I|.$$ The tail integral is at most $C2^{-19k}$ by direct integration of the weight; the estimate holds also for k=0 with the same absolute constant. [F1, step 1.1, step 5.1]

7.1 At each depth k, the sum of the lengths of the spatial intervals in step 6.1 is at most $C(k+1)m(\Omega)$. To prove this, place each I in a maximal dyadic interval Q contained in Omega. Such a Q exists because its possible lengths are bounded by $m(\Omega)$; distinct maximal Q are disjoint. Since $2^{k+1}I$ is not contained in Omega, it is not contained in Q, so I lies within $C2^k|I|$ of an endpoint of Q. At scale $|I|=2^{-j}|Q|$, the number of such dyadic subintervals is at most $C\min(2^j,2^k)$. Their total length, summed over j>=0, is bounded by $C|Q|\sum_{j\ge0}\min(1,2^{k-j})\le C(k+1)|Q|$. Sum over the disjoint Q to obtain the asserted packing. Combining this with step 6.1 gives inside contribution at most $C\alpha m(\Omega)\sum_{k\ge0}(k+1)2^{-18k}\le Ce$, since alpha=20e/h and $m(\Omega)\le h/4$. The series converges, for example by summing its finite geometric derivative. Only finitely many original intervals occur; allowing all intervals in the packing upper bound does not change the estimate. [step 5.1, step 6.1]

8.1 F6 bounds the contribution of the forest removed at level n of step 1.2 by $Chs_n$, because its count is at most $Ch4^n$ and its density is at most D4^(-n). Summing gives $$|\langle C_{R,N}f,g\rangle|\le ChB(1+\log_+(\sqrt{e/h}/B)),$$ where $\log_+t=\max(0,\log t)$. Indeed the sum of $\min(B,A\,2^{-n})$ has at most $1+\log_2(A/B)$ terms equal to B, followed by a geometric tail at most2B; also $\log(A/B)=\log_+(\sqrt{e/h}/B)$. Empty R or zero size gives zero without using a positive B threshold. For h<=e apply this bound to R=S with B=B_* from step 5.1. It is at most $Ch(1+\log(e/h))$, after absorbing fixed B_* into C. For h>e apply it to $R=S_{\rm out}$ with $B=C_* e/h$, for the absolute constant supplied by step 5.1. It is at most $Ce(1+\log(h/e))$. Adding the inside contribution from step 7.1 proves the claimed major-subset estimate for arbitrary $|g|\le\mathbf1_{F'}$. [F6, step 5.1, step 1.2, step 7.1]

9.1 Fix 1<q<infinity. For positive e,h, $\min(e,h)(1+|\log(e/h)|)\le C_q e^{1/q}h^{1-1/q}$. For e>=h use $\log t\le(t^{1/q}-1)/(1/q)$ with t=e/h; for h>=e use the same inequality with exponent1-1/q and t=h/e. The elementary inequality follows by integrating $u^{-1}\le u^{\theta-1}$ from1 to t for theta>0. Given lambda>0 and $u=C_{S,N}\mathbf1_E$, take $F=\{|u|>\lambda\}\cap[-R,R]$ when this has positive measure h. Apply the major-subset estimate and choose $g=\mathbf1_{F'}u/|u|$ there, extended by zero. Then $\langle u,g\rangle=\int_{F'}|u|\ge\lambda h/2$, so $h\le(C_q/\lambda)^q e$. A zero-measure F already satisfies this. Increasing R and using F10 gives the required distribution bound on the whole line. A null E gives zero coefficients directly. The construction respects arbitrary finite families and measurable selectors, so the constant is uniform. AC is inherited through F11, and every random average used in this proof was finite. [F1, F10, F11, step 8.1] ∎
