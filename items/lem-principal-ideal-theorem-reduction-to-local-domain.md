---
id: lem-principal-ideal-theorem-reduction-to-local-domain
kind: lemma
title: "Reduce the principal ideal theorem to a Noetherian local domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-minimal-prime-has-height-zero, lem-height-in-quotient-is-relative-chain-length, lem-minimal-prime-over-an-ideal-exists, thm-noetherian-ring-quotients-and-localisations, thm-localisation-at-a-prime-is-local, thm-prime-spectrum-of-a-localisation-bijection, thm-prime-spectrum-of-a-quotient-bijection, thm-quotient-is-domain-iff-ideal-prime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $R$ be a Noetherian commutative ring, let $x\in R$, and let $\mathfrak p$ be a prime ideal minimal over $(x)$. Then for every minimal prime $\mathfrak q\subseteq\mathfrak p$ of $R$ the localized quotient
$$ A=(R/\mathfrak q)_{\mathfrak p/\mathfrak q} $$
is a Noetherian local domain. If $\mathfrak q\ne\mathfrak p$, then the image of $x$ in $A$ is nonzero and the maximal ideal of $A$ is minimal over that principal ideal. Consequently the principal ideal theorem is reduced to bounding the maximal ideal of such a local domain by $1$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an element $x\in R$, and a prime ideal $\mathfrak p$ minimal over $(x)$.

[L1] Minimal primes are exactly the primes of height zero ([[cor-minimal-prime-has-height-zero]]).

[L2] Quotients and localizations of Noetherian rings are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

[L3] A quotient by a prime ideal is an integral domain ([[thm-quotient-is-domain-iff-ideal-prime]]).

[L4] Localization at a prime ideal is local, with maximal ideal the extended prime ([[thm-localisation-at-a-prime-is-local]]).

[L5] Prime ideals of a quotient and of a localization correspond by inclusion-preserving bijections ([[thm-prime-spectrum-of-a-quotient-bijection]], [[thm-prime-spectrum-of-a-localisation-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak q\subseteq\mathfrak p$ be a minimal prime of $R$. By [L1], $\operatorname{ht}(\mathfrak q)=0$. The quotient $R/\mathfrak q$ is a Noetherian domain by [L2] and [L3], and then [L4] makes $A=(R/\mathfrak q)_{\mathfrak p/\mathfrak q}$ a Noetherian local domain. [L1, L2, L3, L4, given]

2.1 If $\mathfrak q=\mathfrak p$, then $\mathfrak p$ already has height $0$ by step 1.1 and there is nothing left to prove. Assume now that $\mathfrak q\ne\mathfrak p$. Since $\mathfrak p$ is minimal over $(x)$, the element $x$ cannot lie in $\mathfrak q$; otherwise the prime $\mathfrak q$ would also contain $(x)$ and minimality would force $\mathfrak q=\mathfrak p$. Thus the image of $x$ in $R/\mathfrak q$, and hence in $A$, is nonzero. [L1, step 1.1, given]

3.1 Let $\mathfrak m$ be the maximal ideal of $A$. By [L5], primes of $A$ correspond to primes of $R$ that lie between $\mathfrak q$ and $\mathfrak p$. Because $\mathfrak p$ is minimal over $(x)$, the prime $\mathfrak p/\mathfrak q$ is minimal over the image of $(x)$ in $R/\mathfrak q$, and after localizing there is no smaller prime of $A$ containing $x/1$. Hence $\mathfrak m$ is minimal over $(x/1)$. [L4, L5, step 2.1]

4.1 Let $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_d=\mathfrak p$ be any strict prime chain. If $d=0$ there is nothing to bound. If $d>0$, then $\mathfrak p_0\ne\mathfrak p$, so minimality of $\mathfrak p$ over $(x)$ gives $x\notin\mathfrak p_0$. By [L2]–[L4], $$A_0=(R/\mathfrak p_0)_{\mathfrak p/\mathfrak p_0}$$ is a Noetherian local domain in which the image of $x$ is nonzero; [L5] also shows that its maximal ideal is minimal over that image. The original chain induces a strict chain of length $d$ ending at this maximal ideal. Therefore a height bound of $1$ in every reduced local-domain case forces $d\le1$. Since the original chain was arbitrary, $\operatorname{ht}_R(\mathfrak p)\le1$. [L2, L3, L4, L5, given, algebra] ∎
