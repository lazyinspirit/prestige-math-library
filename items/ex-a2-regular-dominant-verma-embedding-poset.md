---
id: ex-a2-regular-dominant-verma-embedding-poset
kind: example
title: "The A2 regular integral-dominant Verma embedding poset"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bruhat-order-on-the-symmetric-group, lem-finite-semisimple-cartan-root-and-string-structure, thm-pbw-model-of-a-verma-module, prop-simple-reflection-embedding-of-verma-modules, thm-universal-property-of-verma-modules, lem-a-nonzero-verma-homomorphism-is-injective]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §15"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (ex-a2-regular-dominant-verma-embedding-poset). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

Let $\lambda$ be regular dominant integral in type $A_2$. The six distinct weights $w\mathbin\cdot\lambda$ are indexed by $W=S_3$, and there is an embedding $M(w\mathbin\cdot\lambda)\hookrightarrow M(v\mathbin\cdot\lambda)$ exactly when $v\le w$ in Bruhat order. Thus the directed Hasse diagram runs from the longest element's Verma module down through the two length-two, two length-one, and identity vertices as inclusions into $M(\lambda)$.

## Facts & Assumptions

**Given:** The supplied $A_2$ triangular decomposition for the Verma modules, Bruhat order [[def-bruhat-order-on-the-symmetric-group]], the PBW weight model [[thm-pbw-model-of-a-verma-module]], simple-root embeddings [[prop-simple-reflection-embedding-of-verma-modules]], the Verma universal property [[thm-universal-property-of-verma-modules]], and injectivity of nonzero Verma maps [[lem-a-nonzero-verma-homomorphism-is-injective]]. The supplied decomposition makes the Cartan maximal toral, so the finite root/string structure [[lem-finite-semisimple-cartan-root-and-string-structure]] applies.

## Verification

**Proof technique:** direct.

1.1 Put $p=\langle\lambda+\rho,\alpha_1^\vee\rangle$ and $q=\langle\lambda+\rho,\alpha_2^\vee\rangle$. Both are positive integers. Write $s=s_{\alpha_1}$, $t=s_{\alpha_2}$, and $w_0=sts=tst$. In the simple-root basis, the displacements $\lambda-w\cdot\lambda$ for $w=e,s,t,st,ts,w_0$ are respectively $$ (0,0),\quad(p,0),\quad(0,q),\quad(p+q,q),\quad(p,p+q),\quad(p+q,p+q). $$ These are six distinct points. Their coordinatewise order is exactly Bruhat comparability: $e$ is below all, $s,t$ are incomparable, $st,ts$ are incomparable, and each length-one vertex lies below each length-two vertex, with $w_0$ above all. [given, algebra]

2.1 The simple-root singular-vector theorem gives embeddings for six of the eight Bruhat covers: $e<s$, $e<t$, $s<ts$, $t<st$, $st<w_0$, and $ts<w_0$. Their positive integral exponents are respectively $p,q,p+q,p+q,p,q$. The two remaining covers are $s<st$ and $t<ts$, each a reflection in $\alpha_1+\alpha_2$. [step 1.1, given, algebra]

2.2 To construct the $s<st$ embedding directly, work in $M(s\cdot\lambda)$ with highest vector $v$. Choose normalized $A_2$ root vectors $e_i,f_i,h_i$ from the supplied finite root structure, and put $F=[f_2,f_1]$. The $A_2$ root spaces give $[f_1,F]=[f_2,F]=0$; Jacobi and $[e_i,f_j]=\delta_{ij}h_i$ give $[e_1,F]=-f_2$ and $[e_2,F]=f_1$. The shifted Dynkin coordinates of $s\cdot\lambda$ are $(-p,p+q)$, so $h_1v=(-p-1)v$ and $h_2v=(p+q-1)v$. Set $c_k=(-1)^k\binom qk(p)_k$, where $(p)_0=1$ and $(p)_k=p(p+1)\cdots(p+k-1)$, and define $$X_{p,q}=\sum_{k=0}^{q}c_k f_1^{q-k}F^k f_2^{q-k}v.$$ The displayed PBW monomials are distinct and $c_0=1$, so $X_{p,q}\ne0$. It has weight $s\cdot\lambda-q(\alpha_1+\alpha_2)=st\cdot\lambda$. Using the four commutators above, the coefficient of $f_1^{q-k-1}F^k f_2^{q-k}v$ in $e_1X_{p,q}$ is $-(q-k)(p+k)c_k-(k+1)c_{k+1}$; the coefficient of $f_1^{q-k}F^k f_2^{q-k-1}v$ in $e_2X_{p,q}$ is its negative, for $0\leq k<q$. Both vanish because $c_{k+1}=-(q-k)(p+k)c_k/(k+1)$. Thus $X_{p,q}$ is singular, and the Verma universal property gives a nonzero map $M(st\cdot\lambda)\to M(s\cdot\lambda)$, which is injective by the cited Verma-map lemma. Interchanging the simple-root indices and $p,q$ constructs the $t<ts$ embedding. [step 1.1, given, algebra]

3.1 Composing the eight cover embeddings from steps 2.1 and 2.2 gives an embedding whenever $v\le w$ in Bruhat order. Conversely, any nonzero map $M(w\cdot\lambda)\to M(v\cdot\lambda)$ sends its highest vector to a nonzero vector of weight $w\cdot\lambda$ in the target. The PBW weight model therefore requires $v\cdot\lambda-w\cdot\lambda\in Q^+$, which by the six displacements in step 1.1 is equivalent to $v\le w$. This proves the exact embedding poset. [step 1.1, step 2.1, step 2.2, given] ∎
