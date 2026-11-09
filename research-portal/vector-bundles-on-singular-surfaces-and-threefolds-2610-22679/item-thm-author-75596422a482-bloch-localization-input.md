---
title: Higher-cycle localization including nonseparated schemes
status: published
research_item: thm-author-75596422a482-bloch-localization-input
dependency_level: 5
---

PDF p. 13: Supported Chow group; PDF p. 16: Curve-supported motivic groups

## Prerequisites

- [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)
- [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)


## Statement
Let $k$ be a field, $U$ a smooth finite-type $k$-scheme, $V\subseteq U$ open, and $r\geq0$. No separatedness of $U$ over $k$ is required. The cokernel complex of the unnormalized simplicial restriction $z^r(U,\bullet)\to z^r(V,\bullet)$ is acyclic.

## Statement references

[def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex)

[lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction)

## External input
Use Levine's raw simplicial localization theorem in the field case of §7 of the identified primary preprint. Its introductory Theorem 1.7 says dimension one, but §1.6 and the actual proof in §7 explicitly treat bases of dimension at most one. Section 2.2 does not impose separatedness, and Theorem 6.12's proof synchronizes the same moving map and homotopy over a finite affine cover. Deep moving and blow-up results remain external inputs. This is neither a cubical replacement nor a definition by sheaf hypercohomology.

## Facts & Assumptions
**Given:** $k,U,V,r$ as in the statement.

**Goal:** Apply the imported theorem with the actual dimension index and cycle convention.

[F1] Levine §7 proves acyclicity of $z_q(V,\bullet)/\operatorname{im}(z_q(U,\bullet))$ for finite-type schemes over a semilocal regular base of dimension at most one. The proof uses Theorem 6.12, including its finite-affine-cover reduction. Lemma 7.1 and the finite-flat degree pull/push argument treat finite residue fields.

[F2] The local unnormalized simplicial Bloch complex, its multiplicities and open restriction are those of [def-bloch-higher-cycle-complex](item-def-bloch-higher-cycle-complex) and [lem-author-75596422a482-open-restriction](item-lem-author-75596422a482-open-restriction).

## Proof
1.1 On an integral clopen component $U_a$ of dimension $d_a$, put $q=d_a-r$. Levine's dimension-$(q+n)$ generators on $U_a\times\Delta^n$ are exactly the codimension-$r$ generators of [F2]. Its face dimension inequalities mean proper intersection with every coordinate face; in the regular equidimensional ambient scheme a nonempty intersection has the expected codimension, since each successive face equation lowers dimension by at most one. The simplicial face multiplicities and alternating differential agree. A field is a zero-dimensional semilocal regular base, so [F1] makes the restriction cokernel acyclic on this component, for finite as well as infinite fields. [F1, F2, given]

2.1 A smooth finite-type scheme over a field is regular and Noetherian. Its finitely many irreducible components are disjoint: an intersection would give a regular local ring with two minimal primes, whereas a regular local ring is a domain. Thus the components are integral and clopen. Cycle complexes, restrictions and their cokernels split as finite direct sums over them. Apply step 1.1 with their respective $d_a-r$ indices; a finite direct sum of acyclic complexes is acyclic. The empty scheme and empty open give the same conclusion. [F1, F2, step 1.1] ∎

## Source notes
The earlier MVW citation uses that book's separated-scheme convention and did not alone justify the stated scope. Levine's separate broader simplicial input supplies it. On preprint p. 1 the introductory codimension conversion prints $d-p$ in place of $d-q$; the correct conversion used above is $z^r(U_a,n)=z_{d_a-r}(U_a,n)$. On p. 43 the final target of the finite-extension pull/push display incorrectly remains over the extension; pushforward returns to the original quotient over $U$. These two display typos do not affect the dimension-indexed localization argument. No local reconstruction of its deep moving constructions is claimed.
