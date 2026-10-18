---
id: lem-temperley-lieb-jones-wenzl-recursion-properties
kind: lemma
title: "The Jones–Wenzl recursion gives annihilating idempotents and their trace"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-temperley-lieb-diagram-category
  - def-temperley-lieb-jones-wenzl-recursion
  - lem-temperley-lieb-generators-satisfy-local-relations
  - thm-temperley-lieb-diagram-generators-span
  - lem-temperley-lieb-closure-trace-is-cyclic-and-markov
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.3, Theorem 2.3.2 and Proposition 2.3.6, PDF pp. 19–23: full induction for idempotence, annihilation, and trace."
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4 and §8, PDF pp. 18–21 and 45–46: quantum integer convention and the distinct root-of-unity exceptions."
---

## Statement

Let $\delta\in\mathbb C^\times$ and suppose $[2]_\delta,\ldots,[n]_\delta$ are nonzero. The recursively defined $p_n$ of [[def-temperley-lieb-jones-wenzl-recursion]] is nonzero, satisfies $p_n^2=p_n$, and obeys $d_i p_n=p_n d_i=0$ for $1\le i<n$. Its corner is one-dimensional, $p_n\mathrm{TL}_n p_n=\mathbb C p_n$, and its normalized closure trace is

$$\tau_n(p_n)=\frac{[n+1]_\delta}{\delta^n}.$$

## Facts & Assumptions

**Given:** The loop convention, the local generator relations, quantum integer recurrence, and normalized closure trace.

[F1] The generators satisfy $d_i^2=\delta d_i$, $d_id_{i\pm1}d_i=d_i$, and distant commutation ([[lem-temperley-lieb-generators-satisfy-local-relations]]).

[F2] The recursion is $p_{r+1}=P_r-\frac{[r]}{[r+1]}P_rd_rP_r$, with $P_r=p_r\otimes1$ ([[def-temperley-lieb-jones-wenzl-recursion]]).

[F3] The quantum integers satisfy $[r+1]=\delta[r]-[r-1]$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

[F4] The closure trace is cyclic and has $\tau_{r+1}(x\otimes1)=\tau_r(x)$ and $\tau_{r+1}((x\otimes1)d_r)=\delta^{-1}\tau_r(x)$ ([[lem-temperley-lieb-closure-trace-is-cyclic-and-markov]]).

[F5] Finite words in the elementary diagram generators, including the empty word for the unit, span the diagram algebra ([[thm-temperley-lieb-diagram-generators-span]]).

[F6] A through strand is a path joining a top point to a bottom point. Each diagram is a matching of boundary points; an elementary $d_i$ in $\mathrm{TL}_n$ has fewer than $n$ through strands, and every through strand of a composite must pass through a distinct through strand at the intermediate boundary ([[def-temperley-lieb-diagram-category]]).

[F7] Write $\varepsilon_s(x)$ for the coefficient of the identity diagram in the diagram basis of $\mathrm{TL}_s$; in particular, a linear combination of diagrams with fewer than $s$ through strands has $\varepsilon_s=0$.

## Proof
**Proof technique:** Induct on the strand number, proving the recursion identities and normalized trace together.

1.1 For ranks zero and one, $p_0=p_1=1$ has all asserted properties, $\varepsilon_s(p_s)=1$, and trace $1=[1]/\delta^0=[2]/\delta$ where applicable. At rank two, $p_2=1-\delta^{-1}d_1$; $d_1^2=\delta d_1$ gives $p_2^2=p_2$ and $d_1p_2=p_2d_1=0$, $\varepsilon_2(p_2)=1$, its corner is $\mathbb C p_2$ since $1,d_1$ span $\mathrm{TL}_2$, and $\tau_2(p_2)=1-\delta^{-2}=[3]/\delta^2$. [F1, F3, F4, F5, F6, F7, given, base, algebra]

2.1 Fix $r\ge2$ and assume inductively that through rank $r$ the recursively defined elements are nonzero idempotents, satisfy $\varepsilon_s(p_s)=1$, are annihilated on both sides by every generator, have corner $\mathbb C p_s$, and satisfy $\tau_s(p_s)=[s+1]/\delta^s$. [step 1.1, ih]

3.1 Put $P=p_r\otimes1$, $Q=p_{r-1}\otimes1\otimes1$, $a=d_{r-1}$, $b=d_r$, and $\mu=[r-1]/[r]$. The recursion at rank $r$ gives $P=Q-\mu QaQ$; $Q$ is idempotent, commutes with $b$, and $bab=b$ by [F1]. Therefore $bPb=\delta Qb-\mu QbabQ=(\delta-\mu)Qb=([r+1]/[r])Qb$ by [F3]. [F1, F2, F3, step 2.1, algebra]

4.1 Set $X=PbP$ and $c=[r]/[r+1]$. Since $PQ=QP=P$, step 3.1 gives $X^2=P(bPb)P=([r+1]/[r])X$, so $(P-cX)^2=P-cX=p_{r+1}$. Also $bp_{r+1}=bP-cbPbP=0$ by step 3.1 and $QbP=bP$; and $p_{r+1}b=Pb-cPbPb=0$ because $PbPb=P(bPb)=([r+1]/[r])PQb=([r+1]/[r])Pb$. For $i<r$, both annihilation identities follow from the induction hypothesis. Juxtaposing a vertical strand preserves the identity coefficient, so $\varepsilon_{r+1}(P)=\varepsilon_r(p_r)=1$. The correction term $P b P$ has fewer than $r+1$ through strands, since every diagram term passes through $b=d_r$, which itself has fewer than $r+1$, and stacking cannot increase that count by [F6]. Hence $\varepsilon_{r+1}(P b P)=0$, so $\varepsilon_{r+1}(p_{r+1})=1$ and $p_{r+1}\ne0$. [F1, F2, F6, F7, step 2.1, step 3.1, algebra]

5.1 Every nonempty generator word has a rightmost letter which kills $p_{r+1}$ by step 4.1. Since generator words span $\mathrm{TL}_{r+1}$ by [F5], $p_{r+1}\mathrm{TL}_{r+1}p_{r+1}=\mathbb C p_{r+1}$. [F5, step 4.1, algebra]

6.1 By [F4], $\tau_{r+1}(P)=\tau_r(p_r)$ and, using cyclicity, $\tau_{r+1}(X)=\tau_{r+1}(PbP)=\tau_{r+1}(bP^2)=\tau_{r+1}(Pb)=\delta^{-1}\tau_r(p_r)$. Hence $\tau_{r+1}(p_{r+1})=\tau_r(p_r)(1-[r]/(\delta[r+1]))=[r+2]/\delta^{r+1}$ by [F3] and the induction hypothesis. This proves the trace recurrence and closes the induction. [F3, F4, step 2.1, step 4.1, induction, discharge-induction] ∎
