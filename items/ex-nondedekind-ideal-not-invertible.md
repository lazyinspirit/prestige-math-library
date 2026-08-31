---
id: ex-nondedekind-ideal-not-invertible
kind: example
title: "A noninvertible ideal in a singular one-dimensional domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-invertible-ideal-characterisations, cor-dimension-preserved-by-integral-extensions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. Let $k$ be a field, let $R:=k[t^2,t^3]\subseteq k(t)$, and let $\mathfrak m=(t^2,t^3)$. Then
$R$ is a one-dimensional domain that is not Dedekind, and $\mathfrak m$ is not
an invertible ideal.

## Facts & Assumptions

**Given:** A field $k$, the cusp ring $R=k[t^2,t^3]$ inside $k(t)$, and its maximal ideal $\mathfrak m=(t^2,t^3)$.

[L1] A nonzero finitely generated fractional ideal is invertible exactly when all maximal localisations are principal ([[thm-invertible-ideal-characterisations]]).

[L2] Assuming Choice, injective integral extensions preserve Krull dimension ([[cor-dimension-preserved-by-integral-extensions]]).

## Verification

**Proof technique:** direct.

1.1 The inclusion $R\subseteq k[t]$ is integral because $t$ satisfies the monic equation $X^2-t^2=0$ with coefficient $t^2\in R$. The ring $k[t]$ is a one-variable polynomial ring over a field, hence a nonfield principal ideal domain and therefore one-dimensional. Thus [L2] gives $\dim R=1$. The same monic equation shows that $t$ is integral over $R$, but $t\notin R$, so $R$ is not integrally closed and therefore is not Dedekind. [L2, given, algebra]

2.1 In the local ring $R_{\mathfrak m}$ one has $\mathfrak m_{\mathfrak m}^2=(t^4,t^5,t^6)R_{\mathfrak m}$. If $t^2$ lay in $\mathfrak m_{\mathfrak m}^2$, we could write $t^2=(at^4+bt^5+ct^6)/s$ with $a,b,c\in R$ and $s\notin\mathfrak m$, so $s=t^2(a+bt+ct^2)\in\mathfrak m$, contradiction. Hence $t^2\in\mathfrak m_{\mathfrak m}\setminus\mathfrak m_{\mathfrak m}^2$. If $\mathfrak m_{\mathfrak m}$ were principal, say $\mathfrak m_{\mathfrak m}=aR_{\mathfrak m}$, then $t^2=au$ for some $u\in R_{\mathfrak m}$. Because $t^2\notin\mathfrak m_{\mathfrak m}^2=a\mathfrak m_{\mathfrak m}$, the element $u$ is a unit, so $\mathfrak m_{\mathfrak m}=t^2R_{\mathfrak m}$. But then $t^3\in\mathfrak m_{\mathfrak m}$ implies $t=t^3/t^2\in R_{\mathfrak m}$, impossible: if $t=r/s$ with $r\in R$ and $s\notin\mathfrak m$, then $r=ts$ would have a linear $t$-term while elements of $R=k[t^2,t^3]$ have no such term. Therefore $\mathfrak m_{\mathfrak m}$ is not principal. [step 1.1, given, algebra]

3.1 Since $\mathfrak m_{\mathfrak m}$ is not principal, [L1] shows that $\mathfrak m$ is not invertible. [L1, step 2.1] ∎
