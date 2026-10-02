---
id: lem-square-free-reduction-of-holomorphic-germ
kind: lemma
title: "Square-free reduction of a holomorphic equation"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-unique-factorisation-domain
  - thm-holomorphic-germ-ring-is-a-ufd
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "§6.4 unique factorisation of the germ ring (p. 182); §6.6–6.7 defining equations and irreducible decomposition (pp. 188–194)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (2.10) factoriality of O_n (p. 82); II (6.6) product of irreducible germs and principal ideals (pp. 106–107)."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $n\ge1$, let $p\in\mathbb C^n$ and let $f\in\mathcal O_{\mathbb C^n,p}$ be a
nonzero nonunit. Then $f$ admits a **square-free reduction**: there are
pairwise nonassociate irreducible germs $q_1,\dots,q_r$ and a unit $u$ with

$$f=u\,q_1^{e_1}\cdots q_r^{e_r},\qquad e_i\ge1,\qquad f_{\mathrm{red}}:=q_1\cdots q_r ,$$

where $f_{\mathrm{red}}$ is reduced in the sense of
[[def-reduced-holomorphic-germ-for-hypersurface]] (no irreducible germ divides
it twice). The associate class of $f_{\mathrm{red}}$ depends only on $f$: any
other factorisation of $f$ into pairwise nonassociate irreducibles produces a
product associate to $f_{\mathrm{red}}$. Moreover, on a neighbourhood of $p$ on
which representatives of $f$ and $f_{\mathrm{red}}$ are both defined, the two
zero sets coincide:

$$Z(f_{\mathrm{red}})=Z(f).$$

## Facts & Assumptions

**Given:** A nonzero nonunit germ $f\in\mathcal O_{\mathbb C^n,p}$.

[F1] A nonzero nonunit germ is reduced when no irreducible element divides it twice; the zero and unit germs are excluded from hypersurface equations ([[def-reduced-holomorphic-germ-for-hypersurface]]).

[F2] The holomorphic germ ring $\mathcal O_{\mathbb C^n,p}$ is a unique factorisation domain, hence an integral domain in which factorisations into irreducibles exist and are unique up to order and associates ([[thm-holomorphic-germ-ring-is-a-ufd]], [[def-unique-factorisation-domain]]).

[F3] A nonzero nonunit of a unique factorisation domain has a factorisation $f=u\,q_1^{e_1}\cdots q_r^{e_r}$ with $u$ a unit, the $q_i$ irreducible and pairwise nonassociate, and $r\ge1$; the multiset of associate classes of the $q_i$ and the exponents are determined by $f$ ([[def-unique-factorisation-domain]]).



**Proof technique:** direct — choose the UFD factorisation, drop repeated factors, and compare zero sets.

## Proof

1.1 By [F3] choose a factorisation $f=u\,q_1^{e_1}\cdots q_r^{e_r}$ with $u$ a unit, the $q_i$ pairwise nonassociate irreducible germs, $e_i\ge1$ and $r\ge1$, and set $f_{\mathrm{red}}:=q_1\cdots q_r$. [given, F3]

2.1 The germ $f_{\mathrm{red}}$ is a nonzero nonunit: it is a product of the nonunits $q_i$ in the domain of [F2], and a product of germs one of which is a nonunit cannot be a unit, while it is nonzero because a domain has no zero divisors and the $q_i\ne0$. [step 1.1, F2]

2.2 The associate class of $f_{\mathrm{red}}$ depends only on $f$: if $f=v\,r_1^{g_1}\cdots r_s^{g_s}$ is another factorisation into pairwise nonassociate irreducibles, then by uniqueness in [F3] the multiset $\{(q_i,e_i)\}$ of associate classes with exponents equals $\{(r_j,g_j)\}$; hence the set of associate classes occurring, and therefore the product $f_{\mathrm{red}}=q_1\cdots q_r$ up to a unit, is the same for the two factorisations. [step 1.1, F3]

3.1 No irreducible germ divides $f_{\mathrm{red}}$ twice. Let $q$ be irreducible with $q^2\mid f_{\mathrm{red}}$. Then $q\mid q_1\cdots q_r$, and factoring the quotient $q_1\cdots q_r/q$ into irreducibles exhibits $q\cdot(\text{quotient})$ and $q_1\cdots q_r$ as two irreducible factorisations of the same element; by uniqueness in [F3], $q$ is associate to one of the $q_i$, say $q_1$. But then $q_1^2\mid f_{\mathrm{red}}$, so writing $f_{\mathrm{red}}/q_1^2$ as a product of irreducibles and comparing with $q_1\cdots q_r$ shows that the associate class of $q_1$ occurs at least twice among the classes of $q_1,\dots,q_r$, contradicting their pairwise nonassociateness. Hence $f_{\mathrm{red}}$ is reduced by [F1]. [step 1.1, step 2.1, F1, F3]

4.1 For the zero sets, put $k:=\max_ie_i$ and write the identities $f=f_{\mathrm{red}}\cdot u\prod_{i}q_i^{e_i-1}$ and $f_{\mathrm{red}}^{k}=\bigl(u^{-1}\prod_iq_i^{k-e_i}\bigr)f$ in the germ ring; after shrinking to a neighbourhood on which representatives of $f$ and $f_{\mathrm{red}}$ are both defined, the first identity gives $Z(f_{\mathrm{red}})\subseteq Z(f)$, and the second gives $Z(f)\subseteq Z(f_{\mathrm{red}})$, since a point with $f(x)=0$ has $f_{\mathrm{red}}(x)^k=0$ and $\mathbb C$ has no nilpotents. Therefore $Z(f_{\mathrm{red}})=Z(f)$ on that neighbourhood. [step 1.1, step 3.1, F1]

5.1 Steps 3.1, 2.2 and 4.1 establish all three asserted properties of the square-free reduction $f_{\mathrm{red}}=q_1\cdots q_r$. [step 3.1, step 2.2, step 4.1] ∎
