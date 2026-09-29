---
id: cex-pushforward-qc-needs-quasi-separated
kind: counterexample
title: Quasi-separatedness in pushforward cannot be omitted
status: published
origin: pipeline
deps:
  - thm-pushforward-qc-under-qcqs-morphism
  - thm-gluing-affine-schemes
  - thm-affine-quasi-coherent-equivalence
  - def-quasi-compact-and-quasi-separated-morphism
  - def-axiom-of-choice
  - def-affine-scheme-spectrum
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-distinguished-subset-of-spectrum
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-monomials-on-an-index-set
  - thm-polynomial-ring-on-a-family-is-a-commutative-ring
  - thm-universal-property-of-a-polynomial-ring-on-a-family
  - def-quotient-ring
  - def-generated-and-principal-ideals
  - thm-generated-ideal-description-in-a-commutative-ring
  - thm-quotient-is-domain-iff-ideal-prime
  - cor-polynomial-ring-over-a-domain-is-a-domain
  - def-localisation-of-a-module
  - def-localisation-at-a-prime-ideal
  - def-principal-localisation
  - lem-zero-in-a-localised-module
  - thm-localisation-equivalence-and-ring-laws
  - thm-gluing-sheaves
  - thm-gluing-ringed-and-locally-ringed-spaces
  - def-quasi-compact-and-quasi-separated-scheme
  - def-compact-space
  - cor-affine-scheme-quasi-compact
  - lem-basic-opens-quasi-compact
  - lem-diagonal-quasi-compact-iff-quasi-separated
  - def-module-on-ringed-space
  - def-quasi-coherent-module-scheme
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Examples §110.30"
      url: "https://stacks.math.columbia.edu/tag/078C"
pipeline_run: frontier-36-complete
---

## Statement refuted

Assume the Axiom of Choice, inherited from the gluing theorems, the
associated-sheaf interfaces and the compactness of prime spectra
([[def-axiom-of-choice]]).

**False claim.** For every morphism $f:X\to S$ of schemes that is
quasi-compact, and every quasi-coherent $\mathcal O_X$-module $\mathcal F$
([[def-quasi-coherent-module-scheme]]), the pushforward $f_*\mathcal F$ is
quasi-coherent on $S$. In other words, the quasi-separatedness hypothesis in
the theorem that quasi-compact and quasi-separated pushforwards preserve
quasi-coherence ([[thm-pushforward-qc-under-qcqs-morphism]]) could be
dropped.

**Counterexample** ([[def-quasi-compact-and-quasi-separated-morphism]],
[[def-axiom-of-choice]]). Let $k$ be a field and let
$$A=k[t,z,x_1,x_2,x_3,\dots]\big/\bigl(t^nx_n^nz:\ n\ge1\bigr)$$
([[def-polynomial-ring-on-a-family-of-indeterminates]],
[[def-monomials-on-an-index-set]]). Put $Y=\operatorname{Spec}A$ and let
$$V=D(x_1)\cup D(x_2)\cup D(x_3)\cup\cdots\subseteq Y$$
be the union of the distinguished opens of the variables $x_n$
([[def-affine-scheme-spectrum]],
[[def-principal-distinguished-subset-of-spectrum]]); the open subscheme $V$
is **not quasi-compact**, since for every finite set $F$ of indices the prime
ideal $\mathfrak p_F=(t-1,\ z,\ x_i: i\ne j)$, where $j$ is the least index
outside $F$, satisfies $\mathfrak p_F\in V$ but
$\mathfrak p_F\notin D(x_i)$ for all $i\in F$. Let $X$ be two copies
$Y_1,Y_2$ of $Y$ glued along the identity of $V$, and let $f:X\to Y$ be the
morphism which is the identity on each copy
([[thm-gluing-affine-schemes]]). Then:

1. $X$ is covered by the two affine open subschemes $Y_1,Y_2$, hence is
   quasi-compact, and $f$ is quasi-compact: for a quasi-compact open
   $W\subseteq Y$ the preimage $f^{-1}(W)$ is covered by two copies of $W$.
2. $f$ is **not quasi-separated**: $Y_1,Y_2$ are affine opens of $X$ lying
   over the common affine open $Y$ of the base, and
   $Y_1\cap Y_2\cong V$ is not quasi-compact.
3. $f_*\mathcal O_X$ is **not quasi-coherent**. The map
   $A\to\prod_{n\ge1}A_{x_n}$ is injective, so
   $\Gamma(Y,f_*\mathcal O_X)\cong A$ consists of the diagonal pairs; but
   $z\neq0$ in $A_t$ while $z$ dies in every $A_{tx_n}$, so
   $(z,0)\in\Gamma(D(t),f_*\mathcal O_X)$ is a section over $D(t)$ which is
   not in the image of the canonical localisation $A_t\to
   \Gamma(D(t),f_*\mathcal O_X)$; a quasi-coherent sheaf on the affine scheme
   $Y$ would have $\Gamma(D(t),-)=A_t$ there
   ([[thm-affine-quasi-coherent-equivalence]]).

Thus quasi-compactness alone does not suffice for the pushforward of a
quasi-coherent module to be quasi-coherent, so the quasi-separatedness
hypothesis in [[thm-pushforward-qc-under-qcqs-morphism]] is necessary.

## Facts & Assumptions

**Given:** The Axiom of Choice; a field $k$; the polynomial ring
$R=k[t,z,x_1,x_2,\dots]$ in the variables $\{t,z\}\cup\{x_n:n\ge1\}$
([[def-polynomial-ring-on-a-family-of-indeterminates]],
[[def-monomials-on-an-index-set]],
[[thm-polynomial-ring-on-a-family-is-a-commutative-ring]]); the ideal
$I\subseteq R$ generated by the monomials $g_n=t^nx_n^nz$, $n\ge1$
([[def-generated-and-principal-ideals]],
[[thm-generated-ideal-description-in-a-commutative-ring]]); the ring
$A=R/I$ ([[def-quotient-ring]]); $Y=\operatorname{Spec}A$ with its
distinguished opens $D(a)$ ([[def-affine-scheme-spectrum]],
[[def-prime-spectrum-and-vanishing-sets]],
[[def-principal-distinguished-subset-of-spectrum]]); the open subscheme
$V=\bigcup_{n\ge1}D(x_n)$; two copies $Y_1,Y_2$ of $Y$ glued along the
identity of $V$, with $X$ the resulting scheme and $f:X\to Y$ the morphism
which is the identity on each copy.

[F1] Monomials and the ideal $I$
([[def-monomials-on-an-index-set]],
[[def-polynomial-ring-on-a-family-of-indeterminates]]): a polynomial is a
finitely supported coefficient family $c:\mathcal M(\{t,z\}\cup\mathbb N)\to
k$, its support being the finite set of monomials with nonzero coefficient;
a monomial is a finitely supported exponent function $a$ on the index set,
written $x^a$; a monomial $x^a$ is divisible by $g_n=t^nx_n^nz$ exactly
when $a(t)\ge n$, $a(x_n)\ge n$ and $a(z)\ge1$, and then
$x^a=x^{a-g_n}g_n$ for the monomial $x^{a-g_n}$. Consequently $I$ equals
the $k$-linear span of the set $D$ of monomials divisible by some $g_n$: each
generator of $I$ is a $k$-linear combination of such monomials and each such
monomial lies in $I$; hence a polynomial $H$ lies in $I$ exactly when every
monomial in its support lies in $D$, and its class in $A$ is zero exactly
when $H\in I$.

[F2] Quotients and primes ([[def-quotient-ring]],
[[thm-quotient-is-domain-iff-ideal-prime]],
[[cor-polynomial-ring-over-a-domain-is-a-domain]],
[[thm-universal-property-of-a-polynomial-ring-on-a-family]]): an ideal
$\mathfrak p\subseteq A$ is prime exactly when the quotient $A/\mathfrak p$
is an integral domain; a polynomial ring over a field in any family of
variables is an integral domain; and a homomorphism out of $R$ is determined
by arbitrary images of the variables, the relations $g_n\mapsto0$ defining a
homomorphism $A\to S$ for any ring $S$ in which the specified images satisfy
the relations.

[F3] Localisation ([[def-principal-localisation]],
[[def-localisation-at-a-prime-ideal]],
[[def-localisation-of-a-module]],
[[lem-zero-in-a-localised-module]],
[[thm-localisation-equivalence-and-ring-laws]]): $A_f$ is the localisation
of $A$ in the powers of $f$; an element $a/1\in A_f$ is zero if and only if
$f^ma=0$ in $A$ for some $m\ge0$; the image of $f$ in $A_f$ is a unit, so in
$A_{tx_n}$ the images of both $t$ and $x_n$ are units and an element killed
by a product of powers of $t$ and $x_n$ is zero; and
$D(tx_n)=D(t)\cap D(x_n)$.

[F4] Gluing ([[thm-gluing-affine-schemes]],
[[thm-gluing-ringed-and-locally-ringed-spaces]],
[[thm-gluing-sheaves]]): the two copies of $Y$ glued along the identity of
the open subscheme $V$ form a scheme $X$ in which $Y_1,Y_2$ are open affine
subschemes with $Y_1\cap Y_2=V$; for an open $W\subseteq X$ the sheaf axiom
for the two-element cover $\{W\cap Y_1,\,W\cap Y_2\}$ identifies
$\Gamma(W,\mathcal O_X)$ with the set of pairs
$(s_1,s_2)\in\Gamma(W\cap Y_1,\mathcal O)\times\Gamma(W\cap Y_2,\mathcal O)$
whose restrictions to $W\cap V$ agree; morphisms on $Y_1$ and $Y_2$ that
agree on $V$ glue to a morphism on $X$; hence the identities of $Y_1$ and
$Y_2$ glue to $f:X\to Y$ with $f|_{Y_i}=\mathrm{id}$, and for an open
$W\subseteq Y$ the preimage $f^{-1}(W)$ is the gluing of the two copies
$W\cap Y_i\cong W$ of $W$ along the identity of $W\cap V$.

[F5] Quasi-compactness and quasi-separatedness
([[def-compact-space]],
[[def-quasi-compact-and-quasi-separated-morphism]],
[[def-quasi-compact-and-quasi-separated-scheme]],
[[cor-affine-scheme-quasi-compact]],
[[lem-basic-opens-quasi-compact]],
[[lem-diagonal-quasi-compact-iff-quasi-separated]]): a scheme is
quasi-compact when its underlying space is compact, which is the case for
affine schemes and for distinguished opens; a space covered by two compact
subsets is compact; a morphism $f:X\to S$ is quasi-compact when
$f^{-1}(W)$ is quasi-compact for every quasi-compact open $W\subseteq S$,
and it is quasi-separated when for all affine opens $U,U'\subseteq X$
lying over a common affine open of $S$ the intersection $U\cap U'$ is
quasi-compact, equivalently when the diagonal is quasi-compact.

[F6] Quasi-coherent sheaves on an affine base
([[def-quasi-coherent-module-scheme]],
[[def-module-on-ringed-space]],
[[thm-affine-quasi-coherent-equivalence]]): for a quasi-coherent
$\mathcal O_Y$-module $\mathcal G$ on the affine scheme $Y=\operatorname{Spec}A$
the counit $\widetilde{\Gamma(Y,\mathcal G)}\to\mathcal G$ is an isomorphism,
and its component on $D(t)$ is the localisation at $t$ of the restriction
map $\Gamma(Y,\mathcal G)\to\Gamma(D(t),\mathcal G)=
\widetilde{\Gamma(Y,\mathcal G)}(D(t))$; in particular a quasi-coherent
$\mathcal G$ satisfies $\Gamma(D(t),\mathcal G)\cong A_t$ whenever
$\Gamma(Y,\mathcal G)\cong A$.

[F7] The theorem being sharpened
([[thm-pushforward-qc-under-qcqs-morphism]]): if $g:X\to S$ is quasi-compact
and quasi-separated and $\mathcal F$ is a quasi-coherent $\mathcal O_X$-module,
then $g_*\mathcal F$ is quasi-coherent; the counterexample below shows that
its quasi-separatedness hypothesis cannot be dropped.

[F8] The Axiom of Choice is inherited from the gluing theorems, the
polynomial-ring universal property, the associated-sheaf interfaces and the
compactness of prime spectra; no infinite simultaneous choice is made below:
the index set $\{t,z\}\cup\mathbb N$ and the cover $\{D(x_n)\}$ are explicitly
displayed, and the auxiliary index $j$ is the least natural number outside a
finite set ([[def-axiom-of-choice]]).

**Proof technique:** direct; compute $\Gamma(f_*\mathcal O_X)$ on the affine
base through the injectivity of $A\to\prod_nA_{x_n}$, exhibit the section
$(z,0)$ over $D(t)$ which is not a localisation of a global section, and use
the affine criterion for quasi-coherence.



## Proof

1.1 The ideal $I$ is the $k$-span of the divisible monomials: every monomial $x^a$ divisible by $g_n$ equals $x^{a-g_n}g_n$ and so lies in $I$, and every generator $g_n$ is such a monomial, so the $k$-span of the divisible monomials is contained in $I$ and contains each generator, hence equals $I$; therefore a polynomial lies in $I$ exactly when every monomial in its support is divisible by some $g_n$, by [F1]. [F1]

1.2 $V$ is not quasi-compact: let $F\subseteq\mathbb N$ be finite and let $j$ be the least index with $j\notin F$; the ideal $\mathfrak p_F=(t-1,z,x_i:i\ne j)\subseteq A$ is prime, because the substitution $t\mapsto1$, $z\mapsto0$, $x_j\mapsto x_j$, $x_i\mapsto0$ for $i\ne j$ defines a surjection $A\to k[x_j]$ with kernel $\mathfrak p_F$, and $k[x_j]$ is a domain by [F2]. Now $x_j\notin\mathfrak p_F$, so $\mathfrak p_F\in D(x_j)\subseteq V$, while $x_i\in\mathfrak p_F$ for every $i\in F$, so $\mathfrak p_F\notin D(x_i)$ for every $i\in F$; hence the finite subfamily indexed by $F$ of the cover $\{D(x_n)\}$ of $V$ does not cover $V$. As $F$ was arbitrary, no finite subfamily covers $V$, and $V$ is not quasi-compact by [F5]. [F2, F5]

1.3 $f$ is quasi-compact: for a quasi-compact open $W\subseteq Y$ the preimage $f^{-1}(W)$ is the gluing of the two copies $W\cap Y_i\cong W$ of $W$ along $W\cap V$ by [F4], hence is covered by the two compact subspaces $W\cap Y_1$ and $W\cap Y_2$, so it is compact by [F5] and $f^{-1}(W)$ is quasi-compact; therefore $f$ is quasi-compact. [F4, F5]

2.1 $z$ and its multiples are not in $I$: the monomial $t^mz$ has $x_n$-exponent $0<n$ for every $n$, so it is divisible by no generator $g_n=t^nx_n^nz$, hence $t^mz\notin I$ for every $m\ge0$ by step 1.1; in particular $z\neq0$ in $A$, and the element $z/1\in A_t$ is nonzero because $t^mz\neq0$ in $A$ for all $m$ by [F3]. [F3, step 1.1]

2.2 $z$ dies in every $A_{tx_n}$: the relation $t^nx_n^nz=0$ holds in $A$, and in $A_{tx_n}$ the images of $t$ and $x_n$ are units by [F3], so $z=(t^nx_n^n)^{-1}\cdot t^nx_n^nz=0$ in $A_{tx_n}$ for every $n\ge1$. [F3, step 1.1]

2.3 The map $A\to\prod_{n\ge1}A_{x_n}$ is injective: let $a\in A$ be nonzero and lift it to $H\notin I$; by step 1.1 some monomial $m$ in the support of $H$ is divisible by no $g_n$, and since the support is finite there is an index $n$ with $n>m(t)$ and $m(x_n)=0$. For every $N\ge0$ the monomial $x_n^Nm$ is then divisible by no $g_j$: a generator with $j=n$ would need $m(t)\ge n$, which fails, and a generator with $j\neq n$ would divide $m$ itself; hence $x_n^NH\notin I$ by step 1.1, so $x_n^Na\neq0$ in $A$ for every $N$, and $a/1\neq0$ in $A_{x_n}$ by [F3]. Therefore a nonzero $a$ has nonzero image in $\prod_nA_{x_n}$, which is the injectivity claimed. [F3, step 1.1]

2.4 $f$ is not quasi-separated: the subschemes $Y_1,Y_2\subseteq X$ are affine opens lying over the common affine open $Y$ of the base, and $Y_1\cap Y_2=V$ is not quasi-compact by step 1.2, so the criterion of [F5] fails and $f$ is not quasi-separated. [F4, F5, step 1.2]

3.1 Global sections: by [F4] a global section of $\mathcal O_X$ is a pair $(s_1,s_2)\in A\times A$ with equal restrictions to $V=Y_1\cap Y_2$; restricting to the cover $\{D(x_n)\}$ of $V$, this means $s_1-s_2$ maps to $0$ in $\prod_nA_{x_n}$, so $s_1=s_2$ by step 2.3; hence $\Gamma(Y,f_*\mathcal O_X)=\Gamma(X,\mathcal O_X)\cong A$, the diagonal embedding. [F4, step 2.3]

3.2 The section $(z,0)$ over $D(t)$: the preimage $f^{-1}(D(t))$ is the gluing of the two copies $D(t)_1,D(t)_2$ of $D(t)$ along $W=D(t)\cap V=\bigcup_nD(tx_n)$ by [F4] and [F3], and the pair $(z,0)\in A_t\times A_t$ has equal restrictions to $W$: on each member $D(tx_n)$ of the cover of $W$ the first entry restricts to $0$ by step 2.2 and the second entry restricts to $0$ as well, and equality on a cover implies equality on $W$. Hence $(z,0)$ is a section in $\Gamma(D(t),f_*\mathcal O_X)$; it is not of the form $(s,s)$, since $z\neq0$ in $A_t$ by step 2.1. [F3, F4, step 2.1, step 2.2]

4.1 $f_*\mathcal O_X$ is not quasi-coherent: suppose it were; then by [F6], applied to the quasi-coherent sheaf $\mathcal G=f_*\mathcal O_X$ and the affine base $Y$, the counit $\widetilde{\Gamma(Y,\mathcal G)}\to\mathcal G$ would be an isomorphism, and since $\Gamma(Y,\mathcal G)\cong A$ by step 3.1 its component on $D(t)$ would identify $A_t$ with $\Gamma(D(t),f_*\mathcal O_X)$. That component is the localisation at $t$ of the restriction map $\Gamma(Y,\mathcal G)\to\Gamma(D(t),\mathcal G)$, and under the identifications of [F4] this restriction map is the pullback $f^{\sharp}$, which sends $s\in A_t$ to the diagonal pair $(s,s)$, because $f$ restricts to the identity on each copy $Y_i$; hence its image is contained in the diagonal and does not contain $(z,0)$, which lies in $\Gamma(D(t),f_*\mathcal O_X)$ by step 3.2. So the component is not surjective, contradicting the isomorphism; therefore $f_*\mathcal O_X$ is not quasi-coherent. [F4, F6, step 3.1, step 3.2]

5.1 Conclusion: by step 1.3 the morphism $f$ is quasi-compact, by step 2.4 it is not quasi-separated, and by step 4.1 the pushforward of the quasi-coherent module $\mathcal O_X$ is not quasi-coherent on $Y$; hence quasi-compactness alone does not imply that pushforwards of quasi-coherent modules are quasi-coherent, the quasi-separatedness hypothesis in [F7] cannot be dropped, and the false claim is refuted. [F7, step 1.3, step 2.4, step 4.1]

6.1 Choice accounting: the field $k$, the variables $t,z,x_1,x_2,\dots$, the ideal $I$, the ring $A$, the cover $\{D(x_n)\}$ and the gluing data are explicitly displayed; the auxiliary index of step 2.3 is chosen from a finite set and the index $j$ of step 1.2 is the least natural number outside a finite set, so no infinite simultaneous choice occurs, and the only Axiom of Choice is the inherited one recorded in [F8], used through the gluing theorems, the polynomial-ring universal property and the affine criterion of [F6]. [F8] ∎
