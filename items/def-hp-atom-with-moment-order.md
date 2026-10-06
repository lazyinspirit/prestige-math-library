---
id: def-hp-atom-with-moment-order
kind: definition
title: "$H^p$ atoms with a prescribed moment order"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-multidimensional-rectangle-and-volume, def-l-p-space-as-a-quotient-by-null-functions, def-locally-integrable-function-on-r-n, def-conjugate-exponents, def-ck-and-multi-index-notation-in-several-variables, def-essential-supremum-with-respect-to-a-measure, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, thm-arithmetic-and-lattice-operations-preserve-measurability, cor-continuous-functions-are-borel-measurable]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 1.2, printed p. 61 (PDF p. 3): atoms $a\\in L^\\infty$, $\\operatorname{supp}a\\subset B$, $\\|a\\|_\\infty\\le|B|^{-1/p}$, moments through $n(p^{-1}-1)$"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 7.34, printed p. 40: cube-supported $L^2$ atoms for $H^1$ with $\\|A\\|_2\\le|Q|^{-1/2}$ and $\\int A=0$; Remark 7.33(a), printed p. 40"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "ch. I, section 1.1.3, printed pp. 10-11: $(p,q)$ atoms, $\\|a\\|_q\\le|B|^{1/q-1/p}$, moments through $\\lfloor n(1/p-1)\\rfloor$"
    - title: "Martin Hiserote, A Characterization of Anisotropic H^1(R^N) by Smooth Homogeneous Multipliers (PhD dissertation, University of Oregon, 2019)"
      url: "https://scholarsbank.uoregon.edu/server/api/core/bitstreams/2549164c-324f-46dc-9a42-07e76fc68fc0/content"
      locator: "Definition 6, printed p. 5: $|a|\\le|B|^{-1/p}$ a.e. with moments $|\\beta|\\le n(p^{-1}-1)$"
verification:
  precheck: n/a
---

## Definition

Let $n\ge1$, let $0<p\le1$ and let $s\in\mathbb N\cup\{0\}$ satisfy
$s\ge\lfloor n(1/p-1)\rfloor$. A **$(p,\infty,s)$-atom** is a measurable
function $a\colon\mathbb R^n\to\mathbb C$ for which there is a nondegenerate
axis-parallel cube $Q$ ([[def-multidimensional-rectangle-and-volume]], so all
$n$ side lengths are equal and positive) such that

1. $\operatorname{supp}a\subseteq Q$, where the support is the closure of
   $\{a\ne0\}$;
2. $|a(x)|\le|Q|^{-1/p}$ for almost every $x\in\mathbb R^n$;
3. $\displaystyle\int_{\mathbb R^n}a(x)x^\alpha\,dx=0$ for every multi-index
   $\alpha$ with $|\alpha|\le s$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

The exponent $1/p\ge1$ in the size bound and the order $s$ are part of the
datum, not free parameters of the function: a $(p,\infty,s)$-atom is also a
$(p,\infty,s')$-atom for every $\lfloor n(1/p-1)\rfloor\le s'\le s$, because the moment conditions
for the smaller order are among those already imposed. The zero function satisfies all three conditions; zero terms may be omitted from atomic representations.

Under Countable Choice ([[def-countable-choice]]), every moment in condition 3 is an absolutely convergent Lebesgue integral; the supporting cube has its finite volume by [[thm-lebesgue-measure-of-a-box-of-every-kind]].
Indeed $a$ vanishes a.e. off the bounded set $Q$ and $|ax^\alpha|\le
|Q|^{-1/p}\sup_{x\in Q}|x^\alpha|$ a.e. on $Q$, a bounded function on a set of
finite measure; the monomial $x^\alpha$ is continuous and hence Borel measurable by
[[cor-continuous-functions-are-borel-measurable]]. Applying
[[thm-arithmetic-and-lattice-operations-preserve-measurability]] to the real
and imaginary parts of $a$ shows that $ax^\alpha$ is measurable, so the
integral is defined and finite. The a.e. bound in condition 2 is an essential
supremum bound, $\|a\|_\infty\le|Q|^{-1/p}$
([[def-essential-supremum-with-respect-to-a-measure]]); replacing $a$ by
another representative of its a.e. class preserves conditions 2 and 3 but can
change the support in condition 1, so the support condition is imposed for the
chosen representative.

The page fixes the order
$$s_p=\lfloor n(1/p-1)\rfloor.$$
This is the least integer compatible with condition 3, and it is the order used
by the sources: DKKP require moments through $n(p^{-1}-1)$, Wang and Hiserote
through $\lfloor n(1/p-1)\rfloor$. The threshold moves exactly at the integers:
$s_p=0$ for $n/(n+1)<p\le1$, $s_p=1$ for $n/(n+2)<p\le n/(n+1)$, and so on. For
$p=1$ the definition specialises to the classical $L^\infty$ atoms of $H^1$:
support in a cube, $|a|\le|Q|^{-1}$ a.e. and $\int a=0$
([[def-conjugate-exponents]] records the exponent convention used for the dual
exponents invoked later on this page).

The ball-supported atoms of the sources differ from this convention only by
fixed constants: a cube $Q$ containing a ball $B$ with $|B|\le|Q|\le c_n|B|$
carries the same conditions up to the dimensional factor $c_n^{1/p}$, and
nondegeneracy rules out the degenerate cubes of zero volume that occur in
moment conditions. The three conditions define the class without selecting representatives; the accompanying Lebesgue-integrability assertions use Countable Choice.
