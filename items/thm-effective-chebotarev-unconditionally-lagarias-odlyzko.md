---
id: thm-effective-chebotarev-unconditionally-lagarias-odlyzko
kind: theorem
title: Lagarias–Odlyzko unconditional effective Chebotarev
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 30
proof_strategy: direct
axiom_use: The original AC, CC and DC assumptions cover the exact analytic, reciprocity and local norm inputs.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-chebotarev-prime-ideal-counting-function
- thm-unified-effective-chebotarev-thorner-zaman
- lem-hecke-family-conductor-growth-from-local-norms
- lem-dedekind-zeta-sharp-exceptional-zero-rectangle
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-primitive-hecke-completed-function-is-entire-of-order-one
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
- lem-dedekind-zeta-divisibility-for-galois-extensions-positive-strip
- lem-quadratic-number-field-principal-product-and-canonical-hecke-character
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- thm-stark-exceptional-dedekind-zeta-zero-bound
- thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive
- thm-fundamental-theorem-of-finite-galois-theory
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-identity-theorem-holomorphic-functions
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- thm-minkowski-bound-for-ideal-classes
- lem-quadratic-hecke-conductor-discriminant-and-real-signs
- thm-ramified-primes-and-the-number-field-discriminant
- def-dirichlet-character-modulo-q
- def-dirichlet-l-function
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-global-artin-reciprocity-and-norm-index
- lem-character-orthogonality-for-finite-abelian-groups
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
sources:
  references:
  - title: J. C. Lagarias and A. M. Odlyzko, Effective Versions of the Chebotarev Density Theorem
    url: https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf
    locator: Theorems 1.3–1.4, printed pp. 412–413. The proof below instead deduces the unchanged source-corrected statement from the already locally reconstructed unified theorem and the local norm bound.
  - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem
    url: https://arxiv.org/pdf/1803.02823v3
    locator: Section 1 Theorem 1.4; its complete subgroup form is used through the locally proved carrier.
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $L/F$ be a finite Galois extension of number fields, let $G=\operatorname{Gal}(L/F)$, and let $C$ be a conjugacy class in $G$. For $x\ge1$, let $\pi_C(x;L/F)$ count the nonzero prime ideals $\mathfrak p$ of $\mathcal O_F$ that are unramified in $L$, have arithmetic Frobenius conjugacy class $C$, and satisfy $N_{F/\mathbb Q}\mathfrak p\le x$. Put $n_L=[L:\mathbb Q]$, $\Delta_L=|\operatorname{disc}(L/\mathbb Q)|$, and $\operatorname{Li}(x)=\int_2^x dt/\log t$ for $x>2$. If $n_L>1$, then $\zeta_L(s)$ has at most one zero in
$$1-\frac{1}{4\log\Delta_L}\le\operatorname{Re}s\le1,\qquad|\operatorname{Im}s|\le\frac{1}{4\log\Delta_L}.$$
If that zero exists, it is real and simple; denote it by $\beta_0$. If $n_L=1$, then $L=\mathbb Q$ and this exceptional zero is absent. There are effectively computable absolute constants $c_3,c_4>0$ such that, for every $x>2$ with $x\ge\exp(10n_L(\log\Delta_L)^2)$,
$$\left|\pi_C(x;L/F)-\frac{|C|}{|G|}\operatorname{Li}(x)\right|\le\frac{|C|}{|G|}\operatorname{Li}(x^{\beta_0})+c_3x\exp\!\left(-c_4n_L^{-1/2}\sqrt{\log x}\right),$$
where the first term on the right is omitted when $\beta_0$ does not exist. If $n_L>1$ and $\beta_0$ exists, define $\nu_L=1$ when $L/\mathbb Q$ lies in a tower of normal extensions, $\nu_L=n_L$ when every Artin $L$-function of $L/\mathbb Q$ is entire, and $\nu_L=n_L!$ otherwise, taking the first applicable case. Define $\mu_L$ by the first applicable case: $\mu_L=4$ if $L/\mathbb Q$ is normal, $\mu_L=16$ if it lies in a normal tower, $\mu_L=8(n_L-1)$ if every Artin $L$-function of $L/\mathbb Q$ is entire, and $\mu_L=4n_L!$ otherwise. Then an effectively computable absolute constant $c_8>0$ satisfies
$$\beta_0<\max\!\left\{1-\frac{1}{\mu_L\log\Delta_L},1-\frac{1}{c_8\Delta_L^{1/n_L}}\right\}.$$

## Statement references

[[def-chebotarev-prime-ideal-counting-function]]

[[thm-unified-effective-chebotarev-thorner-zaman]]

[[thm-stark-exceptional-dedekind-zeta-zero-bound]]

## Facts & Assumptions

**Given:** The original finite Galois extension, class, range and choice assumptions in the Statement.

[F1] For any abelian subgroup $H$ meeting $C$, the full unified theorem supplies its exact designated real simple zero $\beta_1$ if present and the relative prime-count estimate for $A=D_KQn_K^{n_K}>1$, $x\ge A^{c_2}$. Its two relative errors are $e^{-c\log x/\log A}$ and $e^{-\sqrt{c\log x/n_K}}$, and $|\theta_1|\le1$. [[thm-unified-effective-chebotarev-thorner-zaman]]

[F2] For the abelian extension $L/K$ with group $H$ and maximum primitive Hecke conductor norm $Q$, the local-norm bound gives $\log Q\le n_K(\log\Delta_L+2\log|H|)$, without identifying Hecke and Artin conductor exponents. [[lem-hecke-family-conductor-growth-from-local-norms]]

[F3] In degree greater than one, the full stated Dedekind rectangle contains at most one zero, and it is real and simple. The full pole-cleared trivial completion has all zeros in the open critical strip, and its gamma factors are holomorphic and nonzero for positive real part, so such a zero has $0<\beta_0<1$. A normal extension preserves every zero in that strip through its zeta quotient. [[lem-dedekind-zeta-sharp-exceptional-zero-rectangle]] [[lem-primitive-hecke-analytic-landau-page-family-core]] [[lem-primitive-hecke-completed-function-is-entire-of-order-one]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]] [[lem-dedekind-zeta-divisibility-for-galois-extensions-positive-strip]]

[F4] A real character of the given finite abelian group is trivial or has index-two kernel. The latter cuts out a given quadratic intermediate field $E/K$, whose canonical primitive character has the same split/inert values and whose full zeta factorization is $\zeta_E=\zeta_KL(s,\chi_{E/K})$. Primitive characters equal on a common ray modulus have the same conductor and function. The relevant zeta and Hecke factors are holomorphic on the open critical strip, and analytic identities extend from a nonempty open set. [[thm-identity-theorem-holomorphic-functions]] [[thm-fundamental-theorem-of-finite-galois-theory]] [[lem-quadratic-number-field-principal-product-and-canonical-hecke-character]] [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F5] The source-corrected Stark theorem gives the original three cases with the explicit $\mu_L$ thresholds in the Statement and an effective absolute constant. [[thm-stark-exceptional-dedekind-zeta-zero-bound]]

[F6] Discriminants satisfy $\Delta_L\ge D_K^{[L:K]}$. Minkowski's ideal-class bound implies $\log\Delta_L\gg n_L$ for $n_L>1$, with an effective absolute constant. [[thm-relative-discriminant-ideal-is-nonzero-integral-and-transitive]] [[thm-minkowski-bound-for-ideal-classes]]

[F7] Artin reciprocity is onto the finite abelian group, whose characters separate it; a primitive Hecke character over $\mathbb Q$ of finite conductor one is trivial by its finite residue character and the principal-ideal formula at $-1$. [[thm-global-artin-reciprocity-and-norm-index]] [[lem-character-orthogonality-for-finite-abelian-groups]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F8] For a given quadratic extension, the canonical primitive Hecke conductor equals its relative discriminant, and its real parity detects complexification. A ramified rational prime divides the absolute field discriminant. Dirichlet characters and their initial L-series have their usual finite-residue definitions. [[lem-quadratic-hecke-conductor-discriminant-and-real-signs]] [[thm-ramified-primes-and-the-number-field-discriminant]] [[def-dirichlet-character-modulo-q]] [[def-dirichlet-l-function]]

[A1] AC, CC and DC are retained from the original Statement and used at the actual [F1]–[F8] interfaces. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 First suppose $n_L=1$, so $L=F=\mathbb Q$. We derive the required effective rational estimate from [F1] itself, without assuming an ineffective big-O constant is computable. Let $J=\mathbb Q(i)$. If $a+bi$ is integral, its trace $2a$ and norm $a^2+b^2$ are integers; then $(2b)^2$ is an integer, so the rational-root theorem makes $2b$ an integer. Writing $a,b$ as halves of integers shows that nonintegral halves would make $4(a^2+b^2)$ congruent to $1$ or $2$ modulo $4$, impossible. Thus $\mathcal O_J=\mathbb Z[i]$, and the trace matrix in the basis $(1,i)$ has determinant $-4$. Hence $D_J=4$. Take $H=\operatorname{Gal}(J/\mathbb Q)$ for each of its two conjugacy classes. Its two associated primitive Hecke characters are the trivial one and the canonical quadratic one. By [F8], the latter has finite conductor $4$ and odd real parity. The unit group modulo four is $\{1,-1\}$, and the principal-ideal sign formula forces its finite residue value at $-1$ to be $-1$. Therefore, on positive integers it is the real Dirichlet character $\chi_4$ with values $1$ on $1\bmod4$, $-1$ on $3\bmod4$, and $0$ on even integers. Their initial Hecke series are respectively $\zeta(s)$ and $L(s,\chi_4)$, by the unique positive-generator description of rational ideals; analytic continuation identifies them for positive real $s\ne1$. [A1, F1, F4, F7, F8, given, construct, algebra]

1.2 Neither has a real zero in $(0,1)$. For real $s>0$ the paired alternating series $$L(s,\chi_4)=\sum_{j\ge0}\bigl((4j+1)^{-s}-(4j+3)^{-s}\bigr)>0$$ converges, and partial summation gives locally uniform convergence on $\operatorname{Re}s>0$. Similarly $\eta(s)=\sum_{j\ge1}((2j-1)^{-s}-(2j)^{-s})>0$ and $\eta(s)=(1-2^{1-s})\zeta(s)$ by continuation, so $\zeta(s)<0$ for $0<s<1$. The common-region exceptional zero in [F1] is therefore absent for both classes. Here $K=\mathbb Q$, $n_K=1$, $Q=4$, and $A=4$. Summing the two [F1] estimates gives $$\pi_{\mathbb Q}(x)=\operatorname{Li}(x)+O\!\left(xe^{-c\sqrt{\log x}}\right)$$ with an absolute effective $c>0$ for $x\ge4^{c_2}$: the two class proportions sum to one, and the only excluded prime is $2$, which ramifies because $(1+i)^2=2i$; every other prime is unramified by [F8]. The bounded interval $2<x<4^{c_2}$ is absorbed by increasing the effective constant. This proves the asserted $n_L=1$ case. [A1, F1, F4, F7, F8, given, construct, algebra]

1.3 Suppose henceforth $N=n_L>1$ and put $B=\log\Delta_L>0$. The rectangle and real simple qualification follow directly from [F3], and any $\beta_0$ there lies in $(0,1)$. The source-corrected bound with the displayed $\mu_L$ is exactly [F5]. [A1, F3, F5, F6, given, algebra]

2.1 Choose $g\in C$, put $H=\langle g\rangle$, $h=|H|$, and $K=L^H$ with $n=[K:\mathbb Q]$. Then $H$ is abelian, $h,n\le N$ and it meets $C$. Set $A=D_KQn^n$. If $A=1$, then $K=\mathbb Q$, $Q=1$ and every associated primitive Hecke character is trivial by [F7]. Reciprocity and finite character separation force $H=1$; hence $L=K=\mathbb Q$, contradicting $N>1$. Thus $A>1$. [F1, F6, F7, step 1.1, given, choose, construct, algebra]

3.1 By [F2] and [F6], $$\log A\le\log\Delta_L+n(B+2\log h)+n\log n.$$ Minkowski gives $\Delta_L\ge e^{-2}N^{-2}(e^2\pi/4)^N$: use $N^N/N!\ge e^{N-1}/N$ and $r_2\le N/2$. Put $a=e^2\pi/4>4$. Choose an explicit $N_0$ such that $2\log N+2\le(\log a)N/2$ for all $N\ge N_0$; this exists effectively because the derivative of the difference is positive for $N>4/\log a$. For $N\ge N_0$, $B\ge N\log a/2$; for $2\le N<N_0$, [F3] gives $B\ge\log3$. Thus $N\ll B$ with an effective absolute constant. Consequently $\log N\ll B$, since $\log N\le N$. Since $h,n\le N$, there is an effective absolute $C_A$ with $\log A\le C_A N B$. For the stated $x$, put $u=\sqrt{\log x/N}$, so $u\ge\sqrt{10}B$. Whenever $x\ge A^{c_2}$, the unified error terms in [F1] are each at most $e^{-c'u}$ for an effective absolute $c'>0$: indeed $$\frac{\log x}{\log A}\ge\frac{u^2}{C_AB}\ge\frac{\sqrt{10}}{C_A}u,\qquad \sqrt{\frac{\log x}{n}}\ge u.$$ [F1, F2, F3, F6, step 1.1, step 2.1, algebra]

3.2 Suppose the unified designated zero $\beta_1$ exists. It is real and its associated $H$-character is real. If that character is nontrivial, its index-two kernel cuts out a quadratic $E/K$ by [F4]. At primes outside a common modulus containing all ramified primes, Artin reciprocity identifies the given primitive character with the canonical quadratic character on prime generators; [F4] identifies their primitive functions. Its zero therefore transfers to $\zeta_E$ by the factorization in [F4]. If the character is trivial, put $E=K$, and the zero already belongs to $\zeta_K$. In either case $L/E$ is normal because $H$ is abelian, so [F3] transfers $\beta_1$ to $\zeta_L$. The common-region definition in [F1] gives $1/2<\beta_1<1$: $A\ge2$ and $n\ge1$ make its positive strip width less than $1/2$, while its positive $\lambda_1$ makes it less than one. If $\beta_1\ge1-(4B)^{-1}$, the rectangle in [F3] forces $\beta_1=\beta_0$. Otherwise $1-\beta_1>(4B)^{-1}$. [F1, F3, F4, step 2.1, construct, algebra]

4.1 Work in the range $x\ge A^{c_2}$. If no $\beta_1$ exists, the unified main term is $\operatorname{Li}(x)$. If it exists and equals $\beta_0$, its signed contribution to the difference from the main term is bounded by $(|C|/|G|)\operatorname{Li}(x^{\beta_0})$. If it lies outside the rectangle, then $x>4$ under the stated threshold and $\beta_1>1/2$, so $x^{\beta_1}>2$ and $$\operatorname{Li}(x^{\beta_1})\le\frac{x}{\log2}e^{-\log x/(4B)}\ll x e^{-c''u}.$$ The last inequality follows from $\log x/(4B)=Nu^2/(4B)\ge(\sqrt{10}/4)u$. The absolute size of either unified main term is at most $2x/\log2$, so step 3.1 bounds its relative error by $O(xe^{-c'u})$. In all cases the stated Lagarias–Odlyzko counting inequality follows, after decreasing the absolute effective exponent constant. [F1, step 3.1, step 3.2, algebra]

5.1 It remains to remove the temporary condition $x\ge A^{c_2}$. If it fails, step 3.1 and the original lower threshold imply $$10NB^2\le\log x<c_2C_ANB,$$ hence $B<c_2C_A/10$. Minkowski in [F6] then bounds $N$ by an effective absolute constant, and the upper bound also bounds $x$ by an effective absolute constant. A rational prime has at most $[F:\mathbb Q]\le N$ prime ideals above it, so $\pi_C(x;L/F)\le Nx$, while $\operatorname{Li}(x)\le x/\log2$. Increasing the effective absolute coefficient $c_3$ absorbs this entire bounded range into $c_3xe^{-c_4u}$, since the exponential is uniformly bounded below there. This proves the original estimate for every stated $x$. Together with step 1.1 it also proves the zero qualification and source-corrected exceptional bound. [F6, step 1.1, step 3.1, step 4.1, algebra] ∎

## Source notes

The coefficient-one logarithmic branch in the earlier carrier was corrected to the explicit source thresholds of Stark and Lagarias–Odlyzko. The complete counting proof above uses the locally reconstructed unified theorem and the explicit local norm bound, without importing the Lagarias–Odlyzko proof as an unproved supplier.
