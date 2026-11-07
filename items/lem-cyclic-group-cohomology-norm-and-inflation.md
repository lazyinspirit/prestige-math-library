---
id: lem-cyclic-group-cohomology-norm-and-inflation
kind: lemma
title: Cyclic group cohomology, norm quotients, and inflation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- cor-normalized-cochains-compute-group-cohomology
- thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: ChapterII §3, Lemma3.3 and Proposition3.4, printed pp.80–81; direct free-resolution
      and inflation comparison reconstructed here.
verification: {}
---

## Statement

Use normalized inhomogeneous cochains for group cohomology. No additional
choice axiom or supplied injective resolution is required.

Let $n\ge1$, let $C_n=\langle\sigma\mid\sigma^n=1\rangle$, and let $M$ be
a left $C_n$-module, written additively. Put
$N_n=1+\sigma+\cdots+\sigma^{n-1}$. Then
$$H^2(C_n,M)=M^{C_n}/N_nM,\qquad H^3(C_n,M)=\ker(N_n:M\to M)/(\sigma-1)M.$$
For a positive integer $a$, inflate along the quotient map
$C_{na}\twoheadrightarrow C_n$ and give $M$ the inflated action. In degrees
$r=2j$ and $r=2j+1$ with $j\ge1$, this inflation multiplies the class by
$a^j$ under the periodic-resolution identifications. In particular it
multiplies classes by $a$ in degrees two and three.

## Statement references

[[cor-normalized-cochains-compute-group-cohomology]]

[[thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent]]

[Romyar Sharifi, *Group and Galois Cohomology*, Chapter 2, the periodic resolution of a finite cyclic group](https://www.math.ucla.edu/~sharifi/notes/groupcoh-ch02.html)

## Facts & Assumptions

**Given:** $C_n$, $M$, and the quotient $C_{na}\twoheadrightarrow C_n$ in the Statement.

[F1] Normalized inhomogeneous cochains compute group cohomology. [[cor-normalized-cochains-compute-group-cohomology]]

[F2] The quotient from unnormalized to normalized bars is a chain-homotopy equivalence. [[thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent]]

## Proof

**Proof technique:** finite-rank free resolutions and deterministic comparison.

**Given:** The data above.


1.1 Put $R=\mathbb Z[C_n]$, $\epsilon(\sum b_i\sigma^i)=\sum b_i$ and $N=1+\sigma+\cdots+\sigma^{n-1}$. The kernel of $\epsilon$ is $(\sigma-1)R$: subtracting the coefficient sum from the identity coefficient writes every such vector as a sum of $b_i(\sigma^i-1)$. The kernel of multiplication by $\sigma-1$ is $\mathbb ZN$, since its coefficients must all agree; multiplication by $N$ sends $x$ to $\epsilon(x)N$, so its image is $\mathbb ZN$ and its kernel is $\ker\epsilon$. Thus the augmented free complex
$$\cdots\longrightarrow R\xrightarrow{\sigma-1}R\xrightarrow{N}R  \xrightarrow{\sigma-1}R\xrightarrow{\epsilon}\mathbb Z\longrightarrow0$$
is exact, with alternating differentials $d_{2j}=N$ and $d_{2j+1}=\sigma-1$. This constructs the resolution rather than invoking an example. [given, construct, algebra]

1.2 Let $B_r=\mathbb Z[C_n^{r+1}]$ with diagonal group action, boundary the alternating sum deleting one coordinate, and augmentation $B_0\to\mathbb Z$ sending each basis vector to $1$. This is free over $R$ on the finite basis $(1,g_1,\ldots,g_r)$. Prepending $1$ gives a contracting homotopy of the augmented complex as abelian groups, since the consecutive deletion terms cancel; in degree minus one send $1\in\mathbb Z$ to the tuple $(1)$. Thus $B_\bullet$ is exact. Its equivariant Hom complex is the unnormalized inhomogeneous cochain complex, by changing coordinates from $(1,g_1,\ldots,g_r)$ to successive increments; [F1,F2] identify its cohomology with $H^r(C_n,M)$. [F1, F2, given, construct, algebra]

2.1 Compare $B_\bullet$ with the periodic free complex of step 1.1. In each degree both have finite ordered free abelian bases: order group elements as $1,\sigma,\ldots,\sigma^{n-1}$ and order tuples lexicographically. Enumerate their integer coordinate vectors by increasing sum of absolute values, breaking ties lexicographically. To construct a chain map lifting the identity on $\mathbb Z$, for each free $R$-basis element take the first vector in that enumeration whose boundary is the required cycle, and extend $R$-linearly. Exactness of the target ensures that this first vector exists. The same recursion constructs chain homotopies between two such lifts: after the lower-degree homotopies are fixed, their difference minus the already defined homotopy term is a cycle; take its first boundary preimage on each free basis element. All maps and homotopies are therefore uniquely specified by recursion, with no countable family of arbitrary selections. The resulting two comparison maps have composites homotopic to the identities. Applying $\operatorname{Hom}_R(-,M)$ to the periodic complex now gives the actual cohomology in [F1], with alternating coboundaries $\sigma-1$ and $N$. Hence $H^{2j+1}=\ker N/(\sigma-1)M$ and $H^{2j+2}=M^{C_n}/NM$ for every $j\ge0$. [F1, F2, step 1.1, step 1.2, construct, algebra]


3.1 Let $\pi:\mathbb Z[C_{na}]\to\mathbb Z[C_n]$ be the quotient map. On the two periodic complexes put $f_0=f_1=\pi$ and $f_{2j}=f_{2j+1}=a^j\pi$ for $j\ge1$. This is a chain map over the quotient ring homomorphism: the larger norm maps to $aN$ and its generator minus one maps to $\sigma-1$. It lifts the identity on augmented $\mathbb Z$. The homogeneous bar quotient sends each tuple to its coordinatewise image and therefore induces the usual cochain inflation by substitution. Compose that map with the comparisons in step 2.1. Viewed as maps from the larger periodic resolution to the smaller periodic resolution with its restricted action, this composite and $f$ are homotopic by the same first-preimage recursion: the source is free over the larger group ring, the target is exact, and its underlying abelian group in each degree still has a finite ordered basis. Thus $f$ computes the actual inflation, without any comparison choices in arbitrary modules. [F1, F2, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 Applying equivariant Hom to $f$ multiplies by $a^j$ in degrees $2j$ and $2j+1$. Combined with step 2.1 this is the asserted inflation law. At $n=1$ the differentials alternate zero and identity, so all positive groups are zero; at $a=1$ the induced maps are identities. The zero module and zero classes are included. [step 2.1, step 3.1, algebra] ∎

## Remarks

The same constructed resolution proves every positive-degree formula, not only degrees two and three:
$$H^{2j+1}(C_n,M)=\ker N_n/(\sigma-1)M,\qquad H^{2j+2}(C_n,M)=M^{C_n}/N_nM\quad(j\ge0).$$
Thus positive cyclic cohomology is two-periodic with the chosen generator. This is the local formula used by the unramified-unit argument.
