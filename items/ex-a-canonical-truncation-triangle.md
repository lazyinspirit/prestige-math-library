---
id: "ex-a-canonical-truncation-triangle"
kind: "example"
deps: ["thm-canonical-truncations-fit-a-distinguished-triangle"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/08J5"
      title: "Remark 13.12.4 and its three triangles"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For $R=\mathbb Z/4$ and $X=(R\xrightarrow2R)$ in degrees $0,1$, the canonical truncation triangle is $(2R)[0]\xrightarrow iX\xrightarrow q(R/2R)[-1]\xrightarrow\delta(2R)[1]$. The first map is inclusion in degree zero, the second is quotient in degree one, and the connecting map has the explicit roof described below.

## Facts & Assumptions

**Given:** For $R=\mathbb Z/4$ and $X=(R\xrightarrow2R)$ in degrees $0,1$, the canonical truncation triangle is $(2R)[0]\xrightarrow iX\xrightarrow q(R/2R)[-1]\xrightarrow\delta(2R)[1]$. The first map is inclusion in degree zero, the second is quotient in degree one, and the connecting map has the explicit roof described below.

[F1] The canonical truncation triangle is obtained from the short-exact-complex cone-to-quotient construction ([[thm-canonical-truncations-fit-a-distinguished-triangle]]).

## Verification

1.1 The kernel and cokernel of multiplication by two are $2R$ and $R/2R$. Set $A=(2R)[0]$. The quotient complex $V=X/A$ has $V^0=R/2R,V^1=R$ with differential $\bar r\mapsto2r$. The map $v:V\to (R/2R)[-1]$ is quotient in degree one and zero in degree zero. Its kernel is the identity complex on $2R$ after identifying the degree-zero term with $2R$, so $v$ is a quasi-isomorphism. [F1, algebra]

2.1 Let $C=\operatorname{Cone}(i)$, with $C^k=X^k\oplus A^{k+1}$ and differential $(x,a)\mapsto(d_Xx+i(a),-d_Aa)$. The cone-to-quotient map $e:C\to V$ sends $(x,a)$ to the class of $x$; its kernel is the contractible identity cone on $A$. Thus $e$ is a quasi-isomorphism. Let $p:C\to A[1]$ be $(x,a)\mapsto a$. Then $\delta$ is the roof $(R/2R)[-1]\xleftarrow{ve}C\xrightarrow pA[1]$. The cone triangle transported through $ve$ has first arrow $i$ and second arrow $q=v(X\to V)$, proving every displayed arrow with the stated signs. [F1, step 1.1, algebra] ∎
