---
title: External canonical top-weight motivic-to-syntomic comparison
status: published
research_item: thm-author-c5b0693f4fc3-top-torsion-topweight-comparison
dependency_level: 10
---

PDF p. 5: Proposition 2.6: torsion freeness

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic)


## Statement
Let $k$ be algebraically closed, $X$ a finite-type $k$-scheme, $j\geq\dim X$, and $\ell$ any prime. The canonical map of Elmanto–Morrow complexes
$$\mathbb Z(j)_{\rm mot}(X)\otimes^{\mathbf L}\mathbb Z/\ell\longrightarrow\mathbb F_\ell(j)_{\rm syn}(X)$$
is an equivalence. If $\ell$ is invertible in $k$, the target is $R\Gamma_{\acute et}(X,\mu_\ell^{\otimes j})$. If $\ell=\operatorname{char}k$, the target is the derived syntomic theory specified in [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic).

## External input
Import the published report Theorem4, not its application to torsion-freeness. Its proof uses Artin vanishing at invertible primes. In characteristic $p$, it kills the cdh Artin–Schreier obstruction by henselian rigidity and the Kato–Kuzumaki bound for residue fields of transcendence degree at most $j$ over an algebraically closed field. Interpret that obstruction through the precise fiber sequence in [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic). Thus this input concerns the actual map and specified EM theory, not merely abstractly isomorphic groups. The report's proof, not a purported reconstruction of the deeper field/rigidity results, is imported. Theorem4 has no reducedness hypothesis.

## Source qualification
In the published report, Theorem 3(2), printed p.1994, has an étale lower-right corner; EM v1 Theorem 4.28, printed p.29, has the éh corner, identified there with the cdh localization of the étale presheaf. We retain this as a qualified discrepancy and do not import the report's printed square on arbitrary singular schemes. The precise comparison is supplied by [thm-author-c5b0693f4fc3-top-torsion-em-syntomic](item-thm-author-c5b0693f4fc3-top-torsion-em-syntomic).

The report's characteristic-$p$ proof of Theorem 4, printed p.1995, describes the cofiber without its shift. With its cited Artin–Schreier obstruction convention, EM v1 Corollary 4.32 gives the cofiber $R\Gamma_{\rm cdh}(X,\widetilde\nu_1(j))[-j-1]$. This is a confirmed nonfatal source-display omission: vanishing of the obstruction also kills its shift. It does not refute Theorem 4, whose full finite-type scope is retained. The reducedness premise of the separate Theorem 1 is not a premise of Theorem 4.
