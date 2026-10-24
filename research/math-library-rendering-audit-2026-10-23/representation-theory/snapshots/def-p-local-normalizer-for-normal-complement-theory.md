---
id: def-p-local-normalizer-for-normal-complement-theory
kind: definition
title: "P local normalizer for normal complement theory"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-normalizer-of-a-subgroup, def-centralizer-of-a-subgroup, def-sylow-p-subgroup, def-subgroup, thm-sylow-second-theorem, thm-conjugation-is-an-automorphism, lem-centralizers-and-normalizers-are-subgroups, def-finite-p-group]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2–5, PDF pp. 1–15"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Let $G$ be a finite group, $p$ a prime, and $P\in\operatorname{Syl}_p(G)$ a
Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). On this page a **nontrivial
$p$-local normalizer** of $G$ means a subgroup of the form

$$N_G(Q)=\{g\in G:gQg^{-1}=Q\},$$

where $Q$ is a nontrivial subgroup of $P$, that is $1\ne Q\le P$
([[def-normalizer-of-a-subgroup]], [[def-subgroup]]). The quantifier always
excludes $Q=1$: since $N_G(1)=G$, admitting the trivial subgroup would make the
local statements below vacuous or false.

**Why normalizers suffice up to conjugacy.** Every nontrivial $p$-subgroup $S$ of
$G$ is contained in a Sylow $p$-subgroup of $G$, all of which are conjugate to
$P$; so there is $g\in G$ with $S^{g}=gSg^{-1}\le P$ and
$N_G(S^{g})=N_G(S)^{g}$, by the conjugation automorphism
[[thm-conjugation-is-an-automorphism]] ([[thm-sylow-second-theorem]]). Thus the
family $\{N_G(Q):1\ne Q\le P\}$ represents every normalizer of a nontrivial
$p$-subgroup of $G$ up to conjugacy, and the claim "$N_G(Q)$ has a normal
$p$-complement for every $1\ne Q\le P$" is invariant under replacing $P$ by a
conjugate Sylow subgroup. The normalizers are subgroups of $G$ by
[[lem-centralizers-and-normalizers-are-subgroups]].

**Centralizers are named separately.** The broader convention in the literature
calls both the normalizers $N_G(Q)$ and the centralizers $C_G(Q)$ of nontrivial
$p$-subgroups *$p$-local subgroups*. The two theorems of this page that are
stated locally — the inheritance lemma
[[lem-normal-p-complements-pass-to-subgroups-and-p-local-normalizers]] and
Frobenius' normal $p$-complement theorem
[[thm-frobenius-normal-p-complement-theorem]] — quantify over the normalizers
$N_G(Q)$ only, so that is the meaning fixed here; centralizers
([[def-centralizer-of-a-subgroup]]) are never silently included. A normalizer of
a $p$-subgroup is itself a subgroup whose Sylow $p$-subgroups are again to be
read with [[def-sylow-p-subgroup]] and [[def-finite-p-group]].
