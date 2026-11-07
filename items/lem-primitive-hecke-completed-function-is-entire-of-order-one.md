---
dependency_level: 16
id: lem-primitive-hecke-completed-function-is-entire-of-order-one
kind: lemma
title: The pole-cleared primitive Hecke completion is entire of order one
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- lem-ray-hecke-unit-domain-mellin-identity
- lem-ray-hecke-theta-tail-and-meromorphic-mellin
- thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one
- lem-trivial-ray-hecke-character-has-a-positive-simple-pole
- thm-finite-order-hecke-l-euler-product
- thm-stirling-formula-gamma
- def-euler-gamma-function
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
- thm-dominated-convergence
- thm-substitution-for-improper-integrals
- thm-identity-theorem-holomorphic-functions
- def-order-of-an-entire-function
- thm-choice-implies-dependent-implies-countable-choice
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: AC and Countable Choice are retained from the accepted number-field, unit-domain and lattice/integration
  suppliers. The original nonvanishing DC hypothesis is obtained from AC by the proved choice implication.
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1 equations(1.3)–(1.5)
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Printed58–59, actual225-page scan physical63–64; formulation only, complete argument is reconstructed
      below from proved local suppliers.
  - title: Jürgen Neukirch, Algebraic Number Theory, VII§8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Printed496–503, full unit-domain Mellin and theta-tail construction; used through the independently
      accepted local Hecke suppliers.
---

## Statement

Assume AC and Countable Choice. Let $K$ have degree $n=r_1+2r_2$, and let $\chi$ be a primitive finite-order ray-class Hecke character of modulus $\mathfrak f$. Put $Q=|d_K|N\mathfrak f_0$, let $\epsilon_i\in\{0,1\}$ be its real parities, and set $\delta_\chi=1$ for the trivial character and $0$ otherwise. With the full completed normalization
$$\Lambda(s,\chi)=Q^{s/2}\prod_{i\text{ real}}\Gamma_{\mathbb R}(s+\epsilon_i)\prod_{j\text{ complex}}\Gamma_{\mathbb C}(s)L(s,\chi),\qquad \Xi_\chi(s)=[s(s-1)]^{\delta_\chi}\Lambda(s,\chi),$$
where $\Gamma_{\mathbb R}(z)=\pi^{-z/2}\Gamma(z/2)$ and $\Gamma_{\mathbb C}(z)=2(2\pi)^{-z}\Gamma(z)$, the function $\Xi_\chi$ is entire and has order exactly $1$. For some constant $C_{K,\chi}>0$,
$$\max_{|s|\le R}|\Xi_\chi(s)|\le \exp\!\big(C_{K,\chi}(R+1)\log(R+3)\big)\quad(R\ge1),\qquad \log|\Xi_\chi(r)|=\frac n2r\log r+O_{K,\chi}(r)\quad(r\to+\infty).$$
It is nonzero at $0$ and $1$, and every zero lies in the closed strip $0\le\operatorname{Re}s\le1$. With the same root number as the accepted completed functional equation,
$$\Xi_\chi(s)=W_\chi\Xi_{\bar\chi}(1-s),\qquad \Xi_{\bar\chi}(s)=\overline{\Xi_\chi(\bar s)},\qquad |W_\chi|=1.$$
In particular its zero multiset is invariant under $\rho\mapsto1-\bar\rho$, with multiplicity. This asserts no exclusion of possible boundary zeros other than the two points $0,1$.

## Facts & Assumptions

**Given:** The field, primitive character and choice branch in the Statement.

[F1] The full primitive completed function has meromorphic continuation and functional equation, is entire for nontrivial character, and has at most simple poles at $0,1$ for the trivial primitive character. The root number has modulus one. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[F2] Its exact unit-domain Mellin representation has parameter $z=(s+e/n)/2$, $e=\sum\epsilon_i$, and reflected exponent $\kappa=1/2+e/n$. Splitting at $1$ gives a finite sum of tails with integrands bounded by $C e^{-ct^{1/n}}$ times $t^z$ or $t^{\kappa-z}$, plus the two zero-vector rational terms. Their full sum vanishes for nontrivial characters; for the trivial character they give only poles at $0,1$. [[lem-ray-hecke-unit-domain-mellin-identity]] [[lem-ray-hecke-theta-tail-and-meromorphic-mellin]]

[F3] Every nontrivial finite-order Hecke function is holomorphic and nonzero at $1$, and the trivial function has a positive simple pole there. [[thm-nontrivial-ray-class-hecke-l-nonvanishing-at-one]] [[lem-trivial-ray-hecke-character-has-a-positive-simple-pole]]

[F4] Euler products and ideal series converge absolutely on $\operatorname{Re}s>1$. [[thm-finite-order-hecke-l-euler-product]]

[F5] Gamma is nonzero off its poles, is given by its Euler integral on the right half-plane, and satisfies the full sectorial Stirling estimate. [[def-euler-gamma-function]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]] [[thm-stirling-formula-gamma]]

[F6] Dominated convergence and positive improper substitution apply; equality of entire functions on a set with an interior accumulation point gives equality everywhere. [[thm-dominated-convergence]] [[thm-substitution-for-improper-integrals]] [[thm-identity-theorem-holomorphic-functions]]

[F7] Entire-function order is the limsup of $\log\log M(R)/\log R$. [[def-order-of-an-entire-function]]

[A1] AC and CC retain the accepted analytic supplier branch. AC implies DC, including a prescribed initial point, so the DC hypothesis in [F3] is available. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Given:** The data in the Statement.

1.1 By [F1], multiplication by $[s(s-1)]^{\delta_\chi}$ removes every possible pole, so $\Xi_\chi$ is entire and satisfies its stated functional equation because $(1-s)(-s)=s(s-1)$. For nontrivial $\chi$, [F3] and the finite nonzero gamma factors at $1$ give $\Xi_\chi(1)\ne0$. For trivial primitive $\chi$, [F3] gives a nonzero completed residue at $1$, which is precisely $\Xi_\chi(1)$. The functional equation applied at $0$ and the same argument for $\bar\chi$ give $\Xi_\chi(0)\ne0$. Complex conjugation preserves primitivity and real parities: otherwise conjugating a proper-divisor factorization would factor $\chi$ through that divisor. Thus all uses of the conjugate character are within the same full interface. [A1, F1, F3, F5, given, algebra]

1.2 Sum the finitely many accepted partial-class tail formulas in [F2]. If $\chi$ is nontrivial, their rational terms cancel exactly, including the unramified class-character case; if it is trivial, multiplication by $s(s-1)$ makes their sum a constant. Thus $\Xi_\chi$ is a fixed polynomial of degree at most two times a finite sum of entire tail integrals, plus a fixed polynomial. For $|s|\le R$, $R\ge1$, and $t\ge1$, the absolute values of both powers $t^z,t^{\kappa-z}$ are at most $t^{R+2}$, since $0\le e/n\le1$. Each tail is therefore bounded by $C\int_1^\infty e^{-ct^{1/n}}t^{R+2}\,dt/t$. Substitution $u=ct^{1/n}$ and enlargement of the nonnegative integral to $(0,\infty)$ bound this by $Cn c^{-n(R+2)}\Gamma(n(R+2))$. Stirling on the positive real axis [F5] bounds its logarithm by $C_{K,\chi}(R+1)\log(R+3)$. Absorbing the fixed polynomials and finitely many classes proves the stated global upper estimate. [F2, F5, F6, algebra]

2.1 On $\operatorname{Re}s>1$, the absolutely convergent logarithmic Euler series $\sum_{\mathfrak p,k\ge1}\chi(\mathfrak p)^k(N\mathfrak p)^{-ks}/k$ exponentiates to $L(s,\chi)$ by [F4]; its absolute convergence follows by comparison with the ideal series. Hence $L$ and $\Xi$ are nonzero there by [F5]. The functional equation then excludes zeros on $\operatorname{Re}s<0$. On the initial half-plane, conjugation of the ideal series, the positive-real conductor power and the gamma Euler integrals gives $\Xi_{\bar\chi}(s)=\overline{\Xi_\chi(\bar s)}$. The two sides are entire, so [F6] extends the identity globally. Combining it with step 1.1 proves reflection invariance of all zeros and their finite orders. [F1, F4, F5, F6, step 1.1, algebra]

3.1 For real $r\ge2$, the ideal series in [F4] gives $|L(r,\chi)-1|\le\sum_{\mathfrak a\ne\mathcal O_K}(N\mathfrak a)^{-r}\to0$: every nonunit integral ideal has norm at least $2$, and the series is dominated by its convergent exponent-$2$ sum, so [F6] applies to counting measure. In particular $\log|L(r,\chi)|=o(1)$. Taking real logarithms of the absolute values of the displayed completion and applying [F5] to each positive real gamma argument yields $\log|\Xi_\chi(r)|=(r_1/2+r_2)r\log r+O_{K,\chi}(r)$. The conductor power contributes only a fixed multiple of $r$, the parities only $O(\log r)$, and the pole-clearing polynomial only $O(\log r)$. This is the stated lower asymptotic, with leading coefficient $n/2>0$. Together with step 1.2 and [F7] it proves order exactly $1$. [F4, F5, F6, F7, step 1.1, step 1.2, algebra] ∎
