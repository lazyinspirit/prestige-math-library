---
dependency_level: 3
id: lem-certified-number-field-embeddings-and-logarithmic-minors
kind: lemma
title: Certified number-field embeddings and logarithmic matrix bounds
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- alg-integral-closure-by-discriminant-cosets
- thm-integral-closure-coset-search-correct
- thm-rational-polynomial-root-isolation-is-sound-and-finite
- alg-rational-polynomial-root-isolation
- thm-the-complex-numbers-are-algebraically-closed
- thm-rouche-theorem
- lem-qa-29-certified-natural-logarithm-series
- alg-qa-29-certified-natural-logarithm-enclosure
- def-fundamental-units
proof_strategy: direct
sources:
  references:
  - title: 'William A. Stein, Algebraic Number Theory: A Computational Approach, Chapters2
      and8; exact field coordinates and logarithmic unit embedding'
    url: https://wstein.org/books/ant/ant.pdf
  - title: J. Lebl, Guide to Cultivating Complex Analysis, §5.4, Rouché theorem
    url: https://www.jirka.org/ca/ca.pdf
---
## Statement

Assume the Axiom of Choice. Let $f\in\mathbb Q[T]$ be monic irreducible and $K=\mathbb Q[T]/(f)$. From this exact input one can compute a monic integral primitive-element presentation, an integral basis with multiplication table and discriminant, and the exact signature. One can compute, with arbitrary prescribed rational accuracy, pairwise disjoint certified rational complex discs containing individually all the distinct conjugates of the primitive element, and rational interval enclosures of $\log|\sigma(u)|$ for every embedding $\sigma:K\hookrightarrow\mathbb C$ and any supplied finite list of nonzero $u\in K$. The embedding labels may be fixed once and retained during refinement.

In particular, if $u_1,\ldots,u_r\in K^*$ are supplied and their $d$-by-$r$ real logarithmic matrix $(\log|\sigma_i(u_j)|)$ is known to have column rank $r$, one can compute an invertible $r$-row minor and a rational upper bound for the maximum absolute row sum of its inverse. Fundamental units supply such full-rank columns. For $r=0$ return the empty minor and inverse norm zero. No logarithmic lower bound is used.

## Statement references

[Stein, Algebraic Number Theory: A Computational Approach, Chapters2 and8](https://wstein.org/books/ant/ant.pdf)

[Lebl, Guide to Cultivating Complex Analysis, §5.4](https://www.jirka.org/ca/ca.pdf)

## Facts & Assumptions

**Given:** AC, the exact monic irreducible polynomial, finite nonzero element list, requested rational accuracy, and, for the last assertion, the known rank.

[A1] AC supplies weaker choice principles required by the analytic and number-field suppliers. ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F1] The integral-closure coset search terminates with the exact ring of integers and an integral basis; its matrix arithmetic computes products and traces. ([[alg-integral-closure-by-discriminant-cosets]], [[thm-integral-closure-coset-search-correct]])

[F2] Exact rational Sturm isolation terminates and counts all distinct real roots. ([[alg-rational-polynomial-root-isolation]], [[thm-rational-polynomial-root-isolation-is-sound-and-finite]])

[F3] Every complex polynomial splits into linear factors. On a circle, a strict boundary inequality $|p-q|<|q|$ for holomorphic functions gives equal zero counts inside. ([[thm-the-complex-numbers-are-algebraically-closed]], [[thm-rouche-theorem]])

[F4] For every positive rational argument and positive rational tolerance, the rational logarithm-series algorithm terminates and returns a certified interval for the natural logarithm. ([[alg-qa-29-certified-natural-logarithm-enclosure]], [[lem-qa-29-certified-natural-logarithm-series]])

[F5] The logarithmic images of fundamental units are a lattice basis and hence are real-linearly independent in the unit logarithm hyperplane. ([[def-fundamental-units]])

## Proof

1.1 Let $d=\deg f$, let $e\ge1$ be a common denominator of its coefficients, and put $g(Z)=e^df(Z/e)$. Its coefficient of$Z^j$ is integral because $e^{d-j}$ is divisible by the relevant denominator when$j<d$; it is monic and irreducible by invertible scaling. With$\eta=e(T\bmod f)$, $K=\mathbb Q(\eta)$, and residue expressions transform by substituting$T=\eta/e$. Apply [F1] to$g$ for an integral basis. Multiply basis vectors and solve rational linear systems to obtain the multiplication table. The trace of each multiplication matrix gives the exact trace Gram matrix and its nonzero determinant, the field discriminant. The number$r_1$ of real roots of$g$ is computed by [F2], and$r_2=(d-r_1)/2$, since all remaining complex roots occur in conjugate pairs. [given, A1, F1, F2, algebra]

1.2 The polynomial$g$ is separable in characteristic zero. To certify one root in a disc$|z-c|<\rho$, with$c\in\mathbb Q(i)$ and rational$\rho>0$, compute its Taylor coefficients at$c$ by finite exact arithmetic. Search rational bounds$U_0\ge|g(c)|$, $U_j\ge|g^{(j)}(c)|/j!$ for$j\ge2$, and$0<L_1\le|g'(c)|$, and require $U_0+\sum_{j=2}^dU_j\rho^j<L_1\rho$. All modulus bounds are verified by squaring rational quantities; arbitrarily tight bounds follow by rational bisection of square roots of nonnegative rationals. On the circle this strict test bounds$|g(z)-g'(c)(z-c)|$ by a number smaller than$|g'(c)(z-c)|$. Thus [F3] certifies exactly one root in that disc. [given, F3, algebra, construct]

2.1 Enumerate finite tuples of$d$ rational centers and positive rational radii smaller than the requested tolerance, requiring pairwise disjoint closed discs by exact squared-distance tests and requiring the certificate in step1.2 for each. This is a countable enumeration with finite searches at each coordinate-height bound. It terminates: every root$\alpha$ is simple; choose arbitrarily small$\rho$ and a rational center$c$ with$|c-\alpha|=o(\rho)$, for example less than$\rho^3$. Continuity and finite Taylor bounds give$|g(c)|=O(\rho^3)$, $|g'(c)|\ge|g'(\alpha)|/2>0$, and higher Taylor sum$O(\rho^2)$, so the strict certificate holds for sufficiently small radii and tight rational modulus bounds. Since finitely many distinct roots have positive pairwise distances, those discs can also be chosen disjoint. Each has exactly one root, and$d$ such discs account for all roots of the degree-$d$ polynomial. To fix labels, retain one initial certified tuple and thereafter require every new disc to lie inside its respective initial disc; the same existence argument proves refinement still terminates. [step 1.2, F3, algebra]

3.1 Let$u=p(\eta)\ne0$ with$p\in\mathbb Q[Z]$. A rational Cauchy bound$R=1+\max_{j<d}|g_j|$ bounds every conjugate of$\eta$, by the geometric-sum root argument. For a certified disc with center$c$, radius$\rho\le1$ and root$\alpha$, polynomial evaluation satisfies $|p(\alpha)-p(c)|\le\rho\sum_{j\ge1}j|p_j|(R+1)^{j-1}$ after refining until$|c|\le R+1$. This follows by factoring$\alpha^j-c^j$ and bounding its$j$ summands. Rational square-root enclosures for$|p(c)|$ therefore give arbitrary-width rational enclosures$[a,b]$ for$|\sigma(u)|=|p(\alpha)|$. The true modulus is positive because$\sigma$ is a field embedding and$u\ne0$, so refining eventually gives$a>0$. [step 2.1, algebra]

4.1 Apply [F4] to the two positive rational endpoints$a,b$, with progressively smaller tolerances. Monotonicity of the real logarithm makes the lower endpoint enclosure for$\log a$ and upper endpoint enclosure for$\log b$ a valid enclosure for$\log|\sigma(u)|$. These widths tend to zero: the logarithm is continuous on a positive interval containing the limiting modulus, as is also seen from its derivative$1/x$. Thus a search for an interval of any prescribed rational width terminates, for all finitely many embeddings and elements at once. This proves the certified approximation assertion. [step 3.1, F4, algebra]

5.1 For a known-rank logarithmic matrix, form rational interval enclosures for all its$r$-row minors using the finite determinant polynomial. Their widths tend to zero under step3.1. At least one minor has a nonzero determinant, so eventually one interval omits zero; fix that minor and a positive rational lower bound$\delta$ on its determinant modulus. Let$M\ge1$ be a rational upper bound on all its entry moduli. The cofactor Leibniz expansion bounds every inverse entry by$(r-1)!M^{r-1}/\delta$, hence its maximum row sum by$r(r-1)!M^{r-1}/\delta$. This is the required computable rational bound. For fundamental units [F5] gives the rank promise, and repeated complex-conjugate rows do not affect it. For$r=0$, no determinant or approximation is required. [step 4.1, F5, algebra] ∎
