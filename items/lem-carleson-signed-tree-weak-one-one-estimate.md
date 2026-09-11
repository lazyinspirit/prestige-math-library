---
id: "lem-carleson-signed-tree-weak-one-one-estimate"
kind: "lemma"
title: "Carleson signed tree weak one one estimate"
deps: ["def-carleson-tiles-wave-packets-and-tile-order", "thm-plancherel", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "thm-almost-every-point-is-a-lebesgue-point", "thm-monotone-convergence-for-the-integral", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Section 7.2, equation 7.11
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. Let T be a finite plus tree with designated top t, $J_0=I_t$, and $L=|J_0|$. Put $w_{J_0}(y)=(1+|y-c(J_0)|/L)^{-20}$. For every measurable complex f with $\int|f|w_{J_0}<\infty$, all coefficients $\langle f,\phi_s\rangle$ converge absolutely. For every choice of complex $\varepsilon_s$ with $|\varepsilon_s|\le1$, define the signed packet projection
$$P_{T,\varepsilon}f=\sum_{s\in T}\varepsilon_s\langle f,\phi_s\rangle\phi_s.$$
There is a constant C depending only on the fixed packet, independent of T, its top, the coefficients epsilon, f and lambda, such that for every $\lambda>0$,
$$m\{x:|P_{T,\varepsilon}f(x)|>\lambda\}\le\frac C\lambda\int_{\mathbb R}|f(y)|w_{J_0}(y)\,dy.$$
In the normalized bump notation of Lacey (3.4), specialized to the exponent twenty used here, $\chi_{J_0}(y)=L^{-1}(1+|y-c(J_0)|/L)^{-20}=L^{-1}w_{J_0}(y)$. Thus the right-hand side is exactly the $\|fL\chi_{J_0}\|_1$ localization in Lacey (7.11), and the estimate includes arbitrary signs.

## Facts & Assumptions

[F1] The dyadic packet construction gives Schwartz packets, their exact modulation/dilation formula, Fourier support in the lower halves, and the plus-tree order [[def-carleson-tiles-wave-packets-and-tile-order]].

[F2] Plancherel preserves the complex inner product [[thm-plancherel]].

[F3] The complex pairing is sesquilinear and obeys Cauchy–Schwarz [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F4] A locally integrable complex function has vanishing averaged absolute oscillation at almost every point [[thm-almost-every-point-is-a-lebesgue-point]].

[F5] Nonnegative increasing integrands pass to the limit under the integral [[thm-monotone-convergence-for-the-integral]].

[F6] Assume AC [[def-axiom-of-choice]], supplying the countable choice in the Fourier and differentiation interfaces.

## Proof

**Given:** T,t,$J_0$,L and coefficients epsilon as in the Statement. All constants below are uniform in these data and depend only on the fixed Schwartz packet.

1.1 Empty T gives the zero operator. Otherwise put $\xi_0=c(\omega_t)$ and $q_s(x)=e^{-2\pi i\xi_0x}\phi_s(x)$. Because $\xi_0\in\omega_s$, direct differentiation of the explicit packet formula and the Schwartz bounds for phi and its derivative give, for every integer M>=0 and l=|I_s|, $$|q_s(x)|\le C_Ml^{-1/2}(1+|x-c(I_s)|/l)^{-M},\qquad |q_s'(x)|\le C_Ml^{-3/2}(1+|x-c(I_s)|/l)^{-M}.$$ Indeed the remaining modulation frequency $c(\omega_{s,-})-\xi_0$ has absolute value at most1/l. The conjugated operator $Qh=\sum_s\varepsilon_s\langle h,q_s\rangle q_s$ satisfies $P f=e^{2\pi i\xi_0x}Q(e^{-2\pi i\xi_0\cdot}f)$, so modulation changes none of the input norms or output level sets. [F1, F3, given]

1.2 We prove the unweighted bound $m\{|Qh|>\lambda\}\le C\|h\|_1/\lambda$ for every complex h in $L^1$. Choose the maximal dyadic intervals J with $|J|^{-1}\int_J|h|>\lambda$. Their lengths are bounded above by $\|h\|_1/\lambda$, so each such interval lies in a maximal one. The selected intervals are disjoint and countable, and $\sum_J|J|\le\|h\|_1/\lambda$. Maximality of J and its parent give $\int_J|h|\le2\lambda|J|$. Outside their union, every dyadic average at the point is at most lambda. At a Lebesgue point of h, its average oscillation on the shrinking dyadic intervals is bounded by twice the average oscillation on the centered interval of radius equal to their length, hence tends to zero by F4. Thus $|h|\le\lambda$ almost everywhere outside the union. If no such interval exists the same conclusion applies on the whole line. [F4, F5, given]

2.1 The operator Q has a uniform $L^2$ bound. First omit a possible member t. The remaining plus tree is strict. Its lower frequency halves at unequal scales are disjoint: nesting would put the full smaller frequency interval in the larger lower half, while the common top frequency must lie in the upper half. At equal frequency and scale l, the Gram entries satisfy $|\langle q_s,q_{s'}\rangle|\le C(1+|c(I_s)-c(I_{s'})|/l)^{-20}$. To verify this, use exponent40 in step 1.1, extract the inverse twentieth power of the center distance using $1+|c-c'|/l\le(1+|x-c|/l)(1+|x-c'|/l)$, and integrate the remaining normalized weight, with integral2/19. The spatial intervals of a fixed scale form a subset of a dyadic lattice, so the row and column sums are bounded by $C\sum_{n\in\mathbb Z}(1+|n|)^{-20}<\infty$. Plancherel kills the other entries. Expanding a finite synthesis sum and applying $2|z_sz_{s'}|\le|z_s|^2+|z_{s'}|^2$ gives $\|\sum z_sq_s\|_2^2\le C\sum|z_s|^2$. The possible top adds a single term of fixed norm; $\|u+v\|_2^2\le2\|u\|_2^2+2\|v\|_2^2$ preserves a uniform synthesis bound. For $a_s=\langle h,q_s\rangle$ and $A=(\sum|a_s|^2)^{1/2}>0$, pair h with $\sum(a_s/A)q_s$ and use F3 to get $A\le C\|h\|_2$. If A=0 this is immediate. The synthesis bound applied to $\varepsilon_sa_s$ therefore proves $\|Qh\|_2\le C\|h\|_2$. [F1, F2, F3, step 1.1]

2.2 The finite smooth kernel $K(x,y)=\sum_s\varepsilon_sq_s(x)\overline{q_s(y)}$ satisfies $|K(x,y)|\le C|x-y|^{-1}$ and $|\partial_yK(x,y)|\le C|x-y|^{-2}$ for x unequal to y. At each scale l there is only one possible frequency interval, the unique ancestor of the top frequency of length1/l. The spatial centers are a subset of the length-l lattice. Put d=|x-y|. Using exponent6 in step 1.1, extract $(1+d/l)^{-3}$ from the product of the two decay weights and sum the remaining weight over this lattice. The latter sum is bounded uniformly, by comparison with $\sum_{n\in\mathbb Z}(1+|n|)^{-3}$. The scale-l kernel and derivative sums are thus bounded by $Cl^{-1}(1+d/l)^{-3}$ and $Cl^{-2}(1+d/l)^{-3}$. For l<=d, the derivative bound is at most $Cl/d^3$, whose dyadic sum is at most $C/d^2$; for l>d sum $Cl^{-2}$. The kernel estimate follows identically, summing $Cl^2/d^3$ below d and $Cl^{-1}$ above d. All actual scale sets are finite subsets of these geometric sums. [F1, step 1.1]

3.1 Set $h_J=|J|^{-1}\int_Jh$, $b_J=(h-h_J)\mathbf1_J$, and let g equal $h_J$ on J and h elsewhere. Then $\int b_J=0$, $\|b_J\|_1\le2\int_J|h|$, $\|g\|_1\le\|h\|_1$ and $|g|\le2\lambda$ almost everywhere. Hence $\|g\|_2^2\le2\lambda\|h\|_1$. By step 2.1 and the elementary inequality $u^2\mathbf1_{u>a}\ge a^2\mathbf1_{u>a}$, $m\{|Qg|>\lambda/2\}\le C\|h\|_1/\lambda$. The union B of the concentric triple intervals 3J has measure at most $3\|h\|_1/\lambda$. Outside 3J, cancellation gives $Qb_J(x)=\int_J(K(x,y)-K(x,c(J)))b_J(y)dy$. For y in J and x outside 3J, every point between y and c(J) is at distance at least $(2/3)|x-c(J)|$ from x. Integrating the derivative bound in step 2.2 along that segment gives $|K(x,y)-K(x,c(J))|\le C|J|/|x-c(J)|^2$. Its x-integral outside 3J is at most an absolute constant. Consequently $\int_{\mathbb R\setminus3J}|Qb_J|\le C\|b_J\|_1$. [F3, step 2.1, step 2.2, step 1.2]

4.1 The sum $b=\sum_Jb_J$ converges in $L^1$, since $\sum_J\|b_J\|_1\le2\|h\|_1$. Each packet is bounded and the operator sum has finitely many packets, so convergence in $L^1$ implies coefficient convergence and pointwise convergence of Q applied to partial sums. The triangle inequality and F5 therefore give $\int_{\mathbb R\setminus B}|Qb|\le C\|h\|_1$. Markov's inequality, here the direct bound $\int u\ge a\,m\{u>a\}$ for nonnegative u, bounds the measure where $|Qb|>\lambda/2$ outside B by $C\|h\|_1/\lambda$. Since h=g+b, step 3.1 and the measure bound on B prove the desired unweighted weak estimate. The same bound holds for P by the modulation identity. [F5, step 1.1, step 3.1]

5.1 Now assume only the weighted integrability in the Statement and split $f=f_0+f_\infty$ on 3$J_0$ and its complement. On 3$J_0$ the weight is at least $(5/2)^{-20}$, so $\|f_0\|_1\le C\int|f|w_{J_0}$ and step 4.1 applies. For y outside 3$J_0$, put d=dist(y,$J_0$)>=L. Exponent40 packet decay gives $$\sum_{s\in T}\|\phi_s\|_1|\phi_s(y)|\le C\sum_{l\le L,\ l\text{ dyadic}}(L/l)(1+d/l)^{-40}\le C(L/d)^{40}\le Cw_{J_0}(y).$$ Here $\|\phi_s\|_1=\sqrt l\|\phi\|_1$ and there are at most L/l spatial intervals at scale l. The middle bound is the geometric sum of $(l/L)^{39}$ after extracting $(L/d)^{40}$; the last uses $|y-c(J_0)|=d+L/2$. The same estimates show $|\phi_s(y)|\le C_s w_{J_0}(y)$ on the line for each fixed s, with a finite constant $C_s$: on 3$J_0$ both the positive lower bound for w and boundedness of the packet suffice, and outside it the displayed estimate applies. Thus all coefficient integrals are absolute, as claimed. Finite summation and the displayed bound yield $\|P f_\infty\|_1\le C\int|f_\infty|w_{J_0}$. [F1, step 4.1]

6.1 Use the unweighted weak estimate for $P f_0$ at threshold lambda/2 and the $L^1$ bound for $P f_\infty$ with Markov's inequality at the same threshold. Since $|P f|\le|P f_0|+|P f_\infty|$, their two exceptional sets cover the desired one and give the stated weighted weak estimate. The proof covers a singleton top, empty tree, zero input class and all zero coefficients epsilon; lambda is required positive only for the displayed divisions. All decompositions are explicitly dyadic and countable; AC is inherited through F6 and is not used for a new arbitrary-index selection. [F6, step 4.1, step 5.1] ∎
