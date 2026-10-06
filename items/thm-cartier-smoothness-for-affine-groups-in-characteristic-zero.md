---
id: thm-cartier-smoothness-for-affine-groups-in-characteristic-zero
kind: theorem
title: "Cartier's theorem: affine group schemes in characteristic zero are smooth"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["lem-invariant-differentials-of-a-group-scheme", "thm-smoothness-over-characteristic-zero-via-free-differentials", "def-ag-geometrically-regular-algebra-and-fibre", "lem-regular-local-domain-induction", "def-group-scheme-over-a-field", "def-smooth-morphism-schemes", "def-axiom-of-choice", "def-locally-finite-type-and-finite-type-morphism", "def-polynomial-ring-over-a-commutative-ring", "def-quotient-ring", "def-principal-localisation"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 3 §3(g), Lemmas 3.19-3.20, Lemma 3.22 and Theorem 3.23 (Cartier), printed pp. 69-71 (PDF 80-82); Ch. 1, Proposition 1.37, printed p. 18 (PDF 29)."
    - title: "The Stacks Project, Groupoid Schemes chapter"
      url: "https://stacks.math.columbia.edu/download/groupoids.pdf"
      locator: "Lemma 39.8.2 [047N] with Lemma 39.6.3 [047I], printed pp. 12 and 14: free differentials and Cartier's theorem in characteristic zero."
    - title: "The Stacks Project, Varieties chapter"
      url: "https://stacks.math.columbia.edu/download/varieties.pdf"
      locator: "Lemma 25.1 [04QN], printed p. 45: the characteristic-zero smoothness criterion."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field of characteristic $0$ and let $G$ be an affine group scheme of finite type over $k$ ([[def-group-scheme-over-a-field]]). Then the structure morphism $G\to\operatorname{Spec}k$ is smooth, that is, $G$ is a smooth group scheme over $k$ ([[def-smooth-morphism-schemes]]). In particular every local ring $\mathcal O_{G,g}$ is regular and $G$ is reduced. No smoothness, reducedness or finiteness of $G$ beyond finite type is assumed, and the characteristic-zero hypothesis is essential: in characteristic $p>0$ the finite group schemes $\alpha_p$ and $\mu_p$ are not smooth.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $0$ and an affine group scheme $G$ of finite type over $k$ with structure morphism $f:G\to\operatorname{Spec}k$.

[F1] [[lem-invariant-differentials-of-a-group-scheme]]: $\Omega_{G/k}\cong f^*e^*\Omega_{G/k}\cong\mathcal O_G\otimes_k(\mathfrak m_e/\mathfrak m_e^2)$ is a free $\mathcal O_G$-module of rank $\dim_k\operatorname{Lie}(G)$.

[F2] [[thm-smoothness-over-characteristic-zero-via-free-differentials]]: over a field of characteristic $0$, a $k$-scheme locally of finite type with locally free $\Omega_{X/k}$ is smooth over $k$.

[F3] [[def-smooth-morphism-schemes]] and [[def-ag-geometrically-regular-algebra-and-fibre]]: a morphism smooth at a point $x$ has geometrically regular fibre at $x$; for the fibre over the prime $(0)$ of the field $k$ with the trivial extension $K=k$, geometric regularity at $x$ says that the local ring $\mathcal O_{G,x}$ is regular.

[F4] [[lem-regular-local-domain-induction]]: a regular local ring is an integral domain.

[F5] [[def-polynomial-ring-over-a-commutative-ring]], [[def-quotient-ring]] and [[def-principal-localisation]]: in the quotient $k[s]/(s^p)$ of the polynomial ring by the ideal $(s^p)$ the class $s$ is a nonzero nilpotent with $s^p=0$, and the substitution $t=1+s$ identifies the localised quotient $k[t,t^{-1}]/(t^p-1)$ with $k[s]/(s^p)$, because $(1+s)^p-1=s^p$ in characteristic $p$ and $t=1+s$ remains a unit.

[F6] [[def-group-scheme-over-a-field]] and [[def-locally-finite-type-and-finite-type-morphism]]: $G$ is a $k$-scheme of finite type, in particular locally of finite type.

## Proof

1.1 Smoothness. By [F1] the module $\Omega_{G/k}$ is free, hence locally free, and $G$ is locally of finite type over $k$ by [F6]; the field $k$ has characteristic $0$, so [F2] applies and the structure morphism $G\to\operatorname{Spec}k$ is smooth. [F1, F2, F6, given]

1.2 Necessity of characteristic zero. Let $p>0$ and let $A=k[s]/(s^p)$, with class $s\neq0$ and $s^p=0$ by [F5]; its localisation $R=A_{(s)}$ at the maximal ideal $(s)$ is a nonzero local ring in which $s/1$ is again a nonzero nilpotent, since an element killing $s$ in $A$ lies in the annihilator $(s^{p-1})\subseteq(s)$. If $\operatorname{Spec}A$, the underlying scheme of $\alpha_p$, were smooth at the origin, [F3] applied with the trivial extension $K=k$ would make $R$ a regular local ring, and [F4] would make $R$ a domain, contradicting $(s/1)^p=0$ with $s/1\neq0$. Hence $\alpha_p$ is not smooth; by the substitution of [F5] the scheme of $\mu_p$ has the same local ring at the origin, so $\mu_p$ is not smooth either, and the characteristic-zero hypothesis in the theorem cannot be dropped. [F3, F4, F5, algebra]

2.1 Regularity and reducedness. Let $g\in G$. By the definition of smoothness, $G\to\operatorname{Spec}k$ is smooth at $g$, so the fibre over $(0)\in\operatorname{Spec}k$ is geometrically regular at $g$; taking the trivial field extension $K=k/k$, [F3] says that the local ring $\mathcal O_{G,g}$ is regular. Since a regular local ring is a domain by [F4], every $\mathcal O_{G,g}$ has no nonzero nilpotent, so $G$ is reduced. [F3, F4, step 1.1]

3.1 Conclusion. Step 1.1 proves that an affine group scheme of finite type over a field of characteristic $0$ is smooth over that field; step 2.1 derives regularity of all local rings and reducedness; step 1.2 shows that the hypothesis is essential. The Axiom of Choice is used only through the cited criterion [F2] and the regularity suppliers [F3, F4]. [F2, F3, F4, step 1.1, step 1.2, step 2.1] ∎

## Remarks

The independent Oort-style nilpotent proof of Milne (Lemmas 3.19, 3.20, 3.22 and Theorem 3.23) and the Stacks proof of Lemma 39.8.2 via Lemma 39.6.3 are recorded in the page coverage as alternative complete treatments; the proof above uses the invariant-differentials route. The general locally algebraic form of Cartier's theorem is not claimed here.
