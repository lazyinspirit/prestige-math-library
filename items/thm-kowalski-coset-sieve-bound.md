---
dependency_level: 3
id: thm-kowalski-coset-sieve-bound
kind: theorem
title: "Large-sieve bound for coset sieves with abelian quotient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-abstract-large-sieve-setting
  - lem-finite-large-sieve-sifted-density-bound
  - lem-finite-abelian-quotient-coset-character-basis
  - thm-kowalski-conjugacy-sieve-bound
  - thm-kowalski-general-group-sieve-bound
  - def-group
  - def-normal-subgroup
  - def-quotient-group
  - def-group-homomorphism
  - def-finite-cardinality
  - def-conjugacy-class-and-centralizer
  - lem-finite-group-irreducible-matrix-coefficients-form-an-orthonormal-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Chapter 3, §§3.3 and 3.5, Proposition 3.7, printed pp. 36–44"
---
## Statement

Let $\Gamma$ be a group, let $K\triangleleft\Gamma$, and suppose
$A:=\Gamma/K$ is abelian. Let $\Lambda$ be an index set, and for each
$\ell\in\Lambda$ let $\rho_\ell:\Gamma\to G_\ell$ be a surjective
homomorphism to a finite group. Put $K_\ell:=\rho_\ell(K)$, a normal subgroup
of $G_\ell$, and $A_\ell:=G_\ell/K_\ell$, a finite abelian group written
additively. Indeed, $K_\ell$ is normal because $\rho_\ell$ is surjective,
and $gK\mapsto\rho_\ell(g)K_\ell$ is a well-defined surjection from the
abelian group $\Gamma/K$ onto $A_\ell$, so $A_\ell$ is abelian. Fix
$g_0\in\Gamma$ and let $Y:=g_0K$. Let $X$ be a finite set with weights
$\mu(x)\ge0$, $\mu(X)>0$, and let $F:X\to Y$. Choose finite
$L^*\subseteq\Lambda$ and a nonempty finite family $\mathcal L$ of subsets
of $L^*$. For each $\ell\in L^*$, let $C_\ell$ be a nonempty proper union of
$G_\ell$-conjugacy classes contained in the coset $\rho_\ell(g_0)K_\ell$, with
$0<|C_\ell|<|K_\ell|$, and
define
$$S:=\{x\in X:\rho_\ell(F(x))\notin C_\ell\text{ for all }\ell\in L^*\}, \qquad H:=\sum_{m\in\mathcal L}\prod_{\ell\in m} \frac{|C_\ell|}{|K_\ell|-|C_\ell|}.$$

For each $\ell\in L^*$, use the basis on conjugacy classes in the coset
$\rho_\ell(g_0)K_\ell$ whose functions are
$\chi_\pi/\sqrt{|\widehat{A_\ell}_\pi|}$, one nonzero restriction from each
equivalence class of irreducible representations modulo restriction to
$K_\ell$, as in the finite-abelian-quotient coset character-basis lemma; omit
its constant basis vector. For each
$m\in\mathcal L$, use products of these nonconstant functions, with the
constant function for $m=\varnothing$, to define the indexed family and its
optimal large-sieve constant $\Delta_{\rm coset}$. Also set
$F'(x):=g_0^{-1}F(x)\in K$ and
$C'_\ell:=\rho_\ell(g_0)^{-1}C_\ell\subseteq K_\ell$. Let
$\Delta_{\rm matrix}$ be the optimal large-sieve constant on $(X,\mu)$ for
the products of nonconstant normalized matrix coefficients of the finite
groups $K_\ell$, evaluated at $\rho_\ell(F'(x))$, over the same support
$\mathcal L$. Then both bounds hold:
$$\mu(S)\le\frac{\Delta_{\rm coset}}H,\qquad \mu(S)\le\frac{\Delta_{\rm matrix}}H.$$
Consequently $\mu(S)\le\min(\Delta_{\rm coset},\Delta_{\rm matrix})/H$.
When $K=\Gamma$, the coset-character basis is the ordinary irreducible
character basis and the first bound is the conjugacy-sieve bound.

## Statement references

[[def-abstract-large-sieve-setting]]

[[lem-finite-large-sieve-sifted-density-bound]]

[[lem-finite-abelian-quotient-coset-character-basis]]

[[thm-kowalski-conjugacy-sieve-bound]]

[[thm-kowalski-general-group-sieve-bound]]

[[def-group]]

[[def-normal-subgroup]]

[[def-quotient-group]]

[[def-group-homomorphism]]

[[def-finite-cardinality]]

[[def-conjugacy-class-and-centralizer]]

[[lem-finite-group-irreducible-matrix-coefficients-form-an-orthonormal-basis]]

[Kowalski, Chapter 3, Proposition 3.7, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** The normal subgroup, finite quotient maps, coset $Y$, finite
weighted set and map $F$, support, and forbidden conjugacy-invariant sets in
the Statement.

[F1] The character restrictions to a fixed coset have the orthonormal basis
and uniform class masses specified in the coset-character-basis lemma
([[lem-finite-abelian-quotient-coset-character-basis]]).

[F2] For such local probability spaces and any complete orthonormal local
bases, the finite sifted-density lemma gives $\mu(S)\le\Delta/H$
([[lem-finite-large-sieve-sifted-density-bound]]).

[F3] The finite-group matrix-coefficient sieve bound applies to arbitrary
forbidden subsets in finite quotients and yields the same density ratio
([[thm-kowalski-general-group-sieve-bound]]).

[F4] When the normal subgroup equals the whole group, the conjugacy-sieve
bound uses the irreducible-character basis and the ratio
$|C_\ell|/(|G_\ell|-|C_\ell|)$
([[thm-kowalski-conjugacy-sieve-bound]]).

[F5] A surjective homomorphism sends a normal subgroup to a normal subgroup;
the induced map $\Gamma/K\to G_\ell/K_\ell$ is well-defined and surjective.
Its image is abelian because its domain is abelian, and it is finite because
$G_\ell$ is finite ([[def-normal-subgroup]], [[def-quotient-group]],
[[def-group-homomorphism]], [[def-finite-cardinality]]).

## Proof

1.1 For each $\ell$, [F5] verifies that $K_\ell\triangleleft G_\ell$ and $A_\ell$ is finite abelian, as required by the Statement. The $G_\ell$-conjugacy classes in $\rho_\ell(g_0)K_\ell$ partition that coset, whose cardinality is $|K_\ell|$ by left translation. Thus the class mass $|D|/|K_\ell|$ is a probability measure, and $\nu_\ell(C_\ell)=|C_\ell|/|K_\ell|$. By [F1], the restricted characters form a complete orthonormal basis containing $1$. Let $Y_\ell$ be this set of conjugacy classes, and map $F_\ell:X\to Y_\ell$ by $F_\ell(x):=[\rho_\ell(F(x))]$; the image lies in the coset because $F(x)\in g_0K$. Since $C_\ell$ is a union of classes, it determines the corresponding forbidden subset of $Y_\ell$. [given, F1, F5, algebra]

1.2 Since $F(x)\in g_0K$, $F'(x)=g_0^{-1}F(x)$ lies in $K$. The restricted maps $\rho_\ell|_K:K\to K_\ell$ are surjective by the definition of $K_\ell$. Membership is preserved: $\rho_\ell(F'(x))\in C'_\ell$ if and only if $\rho_\ell(F(x))\in C_\ell$. Also $|C'_\ell|=|C_\ell|$ and $|K_\ell|-|C'_\ell|=|K_\ell|-|C_\ell|$. Thus the translated sifted set and its density denominator are exactly those in the finite-group matrix coefficient theorem [F3], which gives $\mu(S)\le\Delta_{\rm matrix}/H$. [given, F3, construct, algebra]

2.1 Apply [F2] to these local spaces and bases. Their local ratio is $\frac{\nu_\ell(C_\ell)}{1-\nu_\ell(C_\ell)} =\frac{|C_\ell|}{|K_\ell|-|C_\ell|},$ so their product-density sum is $H$ and $\mu(S)\le\Delta_{\rm coset}/H$. [F1, F2, step 1.1, algebra]

3.1 If $K=\Gamma$, then $A$ and every $A_\ell$ are trivial, each stabilizer $\widehat A_\pi$ has size $1$, and the coset basis in [F1] is the ordinary irreducible-character basis. The conjugacy result [F4] therefore recovers the first bound with $\Delta_{\rm coset}$. Taking the smaller of the two bounds from steps 2.1 and 1.2 proves the asserted minimum bound. [F1, F4, step 2.1, step 1.2, algebra] ∎

## Remarks

Let $q:\Gamma\to\Gamma/K$ and $q_\ell:G_\ell\to G_\ell/K_\ell$ be the quotient
maps. The induced map is
$\overline\rho_\ell(gK):=\rho_\ell(g)K_\ell$; it is well-defined because
$\rho_\ell(K)=K_\ell$. Its compatibility with the quotient maps is represented
by the following commutative diagram. The square commutes because both paths
send $g$ to $\rho_\ell(g)K_\ell$; the proof above uses the group and coset
identities directly.

```tikzcd
\begin{tikzcd}
\Gamma \arrow[r,"\rho_\ell"] \arrow[d,"q"'] & G_\ell \arrow[d,"q_\ell"]\\
\Gamma/K \arrow[r,"\overline\rho_\ell"'] & G_\ell/K_\ell
\end{tikzcd}
```
