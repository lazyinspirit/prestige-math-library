---
id: ex-a-mixed-hodge-extension-need-not-split-rationally
kind: example
title: "A mixed Hodge extension without a rational splitting"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-rational-mixed-hodge-structure, def-complex-numbers-and-arithmetic]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "SS1.2.5-1.2.11 and SS2.3.1-2.3.8, printed pp. 9-13 and 29-31: opposed filtrations, the mixed Hodge definition, the strictness theorem and the Tate structure; the definition of a mixed Hodge morphism (2.3.4) used to test splittings"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "Definition 1.22 and Definition 2.6, printed pp. 15 and 19: mixed Hodge structures and their morphisms"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures, Srni January 2005 (author-hosted, 15 pp.)"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "(2.1.5) printed p. 4 and (2.2.1) printed p. 6: the Tate object Q(1) and the mixed Hodge datum"
    - title: "F. El Zein, Hodge Structures and Mixed Hodge Structures, University of Pennsylvania course notes (June 24, 2010)"
      url: "https://www2.math.upenn.edu/~siegelch/Notes/ElZein.pdf"
      locator: "SS2, Lemma 2.1 and Example 1.3, printed pp. 2-3: splitting calculations and the one-dimensional mixed example"
---

## Example

A rational mixed Hodge structure can be an extension of two pure structures and
still admit no splitting over $\mathbb Q$. On $H=\mathbb Q e_0\oplus\mathbb Q e_1$
put $W_{-3}=0$, $W_{-2}=W_{-1}=\mathbb Q e_1$, $W_0=H$, and $F^1=0$,
$F^0=\mathbb C(e_0+ie_1)$, $F^{-1}=H_{\mathbb C}$. This is a mixed Hodge
structure sitting in a short exact sequence
$0\to\mathbb Q(1)\to H\to\mathbb Q(0)\to 0$ which has no splitting in the
category of rational mixed Hodge structures.

## Facts & Assumptions

**Given:** The rational vector space $H=\mathbb Q e_0\oplus\mathbb Q e_1$
([[def-rational-mixed-hodge-structure]]), the increasing filtration
$W_{-3}=0$, $W_{-2}=W_{-1}=\mathbb Q e_1$, $W_0=H$ and the decreasing
filtration $F^1H_{\mathbb C}=0$, $F^0H_{\mathbb C}=\mathbb C(e_0+ie_1)$,
$F^{-1}H_{\mathbb C}=H_{\mathbb C}$, with $i\in\mathbb C$ satisfying
$i^2=-1$ and conjugation $\sigma(z)=\bar z$
([[def-complex-numbers-and-arithmetic]]).

[F1] A rational mixed Hodge structure is the datum of a finite increasing $W$ and a finite decreasing $F$ such that on every $\operatorname{Gr}^W_nH_{\mathbb C}$ the induced filtrations are $n$-opposed, i.e. split into the pieces $H^{p,q}_n$ with $\overline{H^{p,q}_n}=H^{q,p}_n$; a morphism preserves $W$ and $F$ ([[def-rational-mixed-hodge-structure]]).

[F2] The Tate structure $\mathbb Q(r)$ is the pure structure of weight $-2r$ with $\mathbb Q(r)_{\mathbb C}=\mathbb C$ concentrated in type $(-r,-r)$; in particular $\mathbb Q(1)$ has weight $-2$ and type $(-1,-1)$, while $\mathbb Q(0)$ has weight $0$ and type $(0,0)$ ([[def-rational-mixed-hodge-structure]]).

[F3] On a graded piece $\operatorname{Gr}^W_nH_{\mathbb C}$ the induced filtration $F$ is the image of $F\cap W_n$ and $\bar F=\sigma(F)$; the summands are $H^{p,q}_n=F^p\operatorname{Gr}^W_n\cap\bar F^q\operatorname{Gr}^W_n$ ([[def-rational-mixed-hodge-structure]]).

## Verification

**Proof technique:** direct.

1.1 The weight filtration is finite with $\operatorname{Gr}^W_{-2}=\mathbb Q e_1$, $\operatorname{Gr}^W_{-1}=0$ and $\operatorname{Gr}^W_0=H/\mathbb Q e_1\cong\mathbb Q e_0$. On $\operatorname{Gr}^W_{-2}$ the induced $F$ has $F^0=0$ and $F^{-1}=\operatorname{Gr}^W_{-2}$, since $F^0\cap W_{-2}=\mathbb C(e_0+ie_1)\cap\mathbb C e_1=0$; the conjugate filtration satisfies $\bar F^{-1}=\operatorname{Gr}^W_{-2}$ and $\bar F^0=0$ for the same reason, so the pieces are $H^{-1,-1}=\operatorname{Gr}^W_{-2}$ and nothing else, and $H^{-1,-1}$ is spanned by the image of $e_1$, which is rational. On $\operatorname{Gr}^W_0$ the image of $F^0\cap W_0=\mathbb C(e_0+ie_1)$ is all of $\operatorname{Gr}^W_0$ because $e_0+ie_1\mapsto e_0\ne0$, and $F^1=0$; the conjugate $\bar F^0=\sigma(F^0)=\mathbb C(e_0-ie_1)$ likewise has image all of $\operatorname{Gr}^W_0$, so the pieces are $H^{0,0}=\operatorname{Gr}^W_0$ and nothing else. Both graded pieces are therefore $n$-opposed, with the rational structure of $e_1$ and $e_0$ respectively, so $(H,W,F)$ is a rational mixed Hodge structure; its graded pieces are $\mathbb Q(1)$ and $\mathbb Q(0)$ in the convention [F2]. [given, F1, F2, F3, algebra]

2.1 Let $\iota\colon\mathbb Q(1)\to H$ be the inclusion $\mathbb C\to H_{\mathbb C}$ sending $1$ to $e_1$ and let $\pi\colon H\to\mathbb Q(0)$ be the $\mathbb Q$-linear map $e_0\mapsto1$, $e_1\mapsto0$. Both preserve the filtrations: $\iota$ sends the weight-$(-2)$ structure into $W_{-2}H=\mathbb Q e_1$ and $F^{-1}\mathbb Q(1)_{\mathbb C}=\mathbb C$ into $F^{-1}H_{\mathbb C}=H_{\mathbb C}$, while $F^0\mathbb Q(1)_{\mathbb C}=0$; and $\pi$ satisfies $\pi(W_{-1}H)=0=W_{-1}\mathbb Q(0)$ and $\pi(W_0H)=\mathbb Q(0)=W_0\mathbb Q(0)$, $\pi(F^0H_{\mathbb C})\subseteq\mathbb C=F^0\mathbb Q(0)_{\mathbb C}$ and $\pi(F^1H_{\mathbb C})=0$. Hence $0\to\mathbb Q(1)\xrightarrow{\iota}H\xrightarrow{\pi}\mathbb Q(0)\to0$ is a short exact sequence of rational mixed Hodge structures, with $\ker\pi=\mathbb Q e_1$. [given, F1, F2, step 1.1, algebra]

3.1 Every $\mathbb Q$-linear section $s$ of $\pi$ satisfies $s(1)=e_0+q e_1$ with $q\in\mathbb Q$, because $\pi(e_0+q e_1)=1$ and $\pi(e_1)=0$. If $s$ were a morphism of mixed Hodge structures, it would satisfy $s_{\mathbb C}(F^0\mathbb Q(0)_{\mathbb C})\subseteq F^0H_{\mathbb C}=\mathbb C(e_0+ie_1)$; since $F^0\mathbb Q(0)_{\mathbb C}=\mathbb C$ and $s_{\mathbb C}(1)=e_0+qe_1$, there would be $\lambda\in\mathbb C$ with $e_0+qe_1=\lambda(e_0+ie_1)$. Comparing the coefficients of $e_0$ and $e_1$ in the basis $(e_0,e_1)$ gives $\lambda=1$ and $q=i$, which is impossible for $q\in\mathbb Q$. Hence the extension does not split in the category of rational mixed Hodge structures. The obstruction is visible directly in the $(0,0)$-direction: $F^0H_{\mathbb C}\cap\bar F^0H_{\mathbb C}=\mathbb C(e_0+ie_1)\cap\mathbb C(e_0-ie_1)=0$, while a rational section must send $1$ into a rational vector of $F^0$, which is then also fixed by conjugation and hence would have to lie in this zero intersection. [given, F1, step 2.1, algebra] ∎

## Source notes

Deligne II gives the theory, the Tate object and the morphism condition; the
two-dimensional witness with $F^0=\mathbb C(e_0+ie_1)$ was not located verbatim
in the fetched texts, so the statement and verification are recorded as
generated, with the definitional background cited. The closest
statement-level analogue is the one-dimensional example on the punctured line,
El Zein, Example 1.3. No choice principle is used: the only quantifiers run
over elements of the displayed two-dimensional space.
