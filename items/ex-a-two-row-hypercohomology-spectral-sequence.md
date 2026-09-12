---
id: "ex-a-two-row-hypercohomology-spectral-sequence"
kind: "example"
title: "A two-row hypercohomology spectral sequence"
deps: ["thm-second-hypercohomology-spectral-sequence", "def-spectral-sequence-computation-record", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Section 5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Example

Let $K$ be bounded below with $H^qK=0$ except for $q=0,1$, and supply the data of the second hypercohomology theorem for $F$. Put $A=H^0K$, $B=H^1K$. The only $E_2$ rows are $E_2^{p,0}=R^pF(A)$ and $E_2^{p,1}=R^pF(B)$. With $\tau_p=d_2^{p,1}:R^pF(B)\to R^{p+2}F(A)$, the target $\mathbb R^nF(K)$ fits into
$$0\to\operatorname{coker}\tau_{n-2}\to\mathbb R^nF(K)\to\ker\tau_{n-1}\to0,$$
where negative-index terms are zero. The values of $\tau$ and these extensions need additional input for a general $K$.

## Facts & Assumptions

**Given:** The functor, complex and supplied replacements, with DC or supplied comparisons for naturality.

[F1] The second hypercohomology theorem gives this $E_2$, finite decreasing filtration and differential $(r,1-r)$ ([[thm-second-hypercohomology-spectral-sequence]]).

[F2] A computation record must retain unknown differentials and extensions explicitly ([[def-spectral-sequence-computation-record]]).

## Verification

1.1 For $r=2$ the only possible nonzero arrows are $\tau_p$ from row one to row zero. Hence $E_3^{p,0}=\operatorname{coker}\tau_{p-2}$ and $E_3^{p,1}=\ker\tau_p$. For $r\ge3$, every outgoing arrow from either row has negative second coordinate and every incoming arrow starts above row one. These positions stay zero on successive pages, so $E_3=E_\infty$. [F1]

2.1 In total degree $n$, the only possible filtration quotients are at $p=n$ and $p=n-1$. F1's zero/full endpoints identify the first as a subobject of the target and the second as its quotient, giving the displayed exact sequence. At $n=0$ it reduces to $\mathbb R^0F(K)=F(A)$; at $n=1$ its subobject is $R^1F(A)$ and its quotient is $\ker\tau_0$. Below zero there are no surviving quotients, so the finite target filtration forces vanishing. This proves convergence and identifies the unresolved extension, rather than assuming a splitting. [F1, F2, step 1.1]

3.1 A fully numerical specialization takes abelian groups, $F$ the identity, and $K^0=\mathbb Z/2$, $K^1=\mathbb Z/3$ with zero differential and supplied replacements. Exactness of identity means its positive derived objects vanish, since applying it preserves the exact resolution. Thus $E_2^{0,0}=\mathbb Z/2$, $E_2^{0,1}=\mathbb Z/3$, all other entries are zero, and every $\tau_p$ is zero. Each total degree has one nonzero quotient: the target is $\mathbb Z/2$ in degree zero, $\mathbb Z/3$ in degree one and zero otherwise. The upper edges are the identity under the augmentation identification. This specialization has no extension ambiguity and uses no choice beyond the supplied-data convention. [F1, F2, step 2.1] ∎
