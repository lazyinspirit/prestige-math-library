---
id: def-termwise-hochschild-homology-complex-of-a-rouquier-complex
kind: definition
title: "The termwise Hochschild complex of a Rouquier complex and the groups HHH"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-khovanovs-hhh-rouquier-generator-complexes, def-termwise-hochschild-homology-complex-and-iterated-homology, def-hochschild-chain-complex-of-a-bimodule, def-hochschild-hyperhomology-of-a-bimodule-complex, thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]
justified_by: []
forward_refs: [ex-termwise-and-total-hochschild-theories-have-different-grading-outputs]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3; printed pp. 5-7"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Anna Beliakova, Krzysztof K. Putyra and Stephan M. Wehrli, Quantum link homology via trace functor I, arXiv:1605.03523v2; section 3.8.6, equation (3.44), printed p. 39"
      url: "https://arxiv.org/pdf/1605.03523"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $F(\sigma)$ be the generator complex of
[[def-khovanovs-hhh-rouquier-generator-complexes]], a bounded complex of graded
$(R,R)$-bimodules with degree-zero differentials, and let $HH_h(R,-)$ be
Hochschild homology, computed by the chain complexes $C_\bullet(R,-)$ of
[[def-hochschild-chain-complex-of-a-bimodule]]. Since every differential
$d^j\colon F(\sigma)^j\to F(\sigma)^{j+1}$ is a map of $R$-bimodules, it
commutes with the Hochschild faces and induces a chain map
$C_\bullet(R,F(\sigma)^j)\to C_\bullet(R,F(\sigma)^{j+1})$; since
$d^{j+1}d^j=0$, the induced maps give a cochain complex of graded
$\mathbb Q$-vector spaces for every $h\ge0$,
$$\bigl(HH_h(R,F(\sigma)^\bullet),\ HH_h(R,d^\bullet)\bigr),$$
the **termwise Hochschild complex** in Hochschild degree $h$
([[def-termwise-hochschild-homology-complex-and-iterated-homology]] applied to
the bounded complex of $R$-bimodules $F(\sigma)$; its internal grading is
inherited). The **HHH groups** of $\sigma$ are
$$HHH^{j,h,d}(\sigma):=H^j\bigl(HH_h(R,F(\sigma)^\bullet)\bigr)_d,\qquad j\in\mathbb Z,\ h\ge0,\ d\in\mathbb Z,$$
the cohomology in Rouquier degree $j$ and internal degree $d$ of the termwise
complex, a trigraded $\mathbb Q$-vector space.

This is the componentwise construction of Beliakova-Putyra-Wehrli, section
3.8.6, equation (3.44) (Khovanov's construction is the case of the Rouquier
complex of a braid word), and it is *not* the total Hochschild hyperhomology of
the complex $F(\sigma)$ of
[[def-hochschild-hyperhomology-of-a-bimodule-complex]]: the latter is the
abutment of a spectral sequence whose second page consists of the iterated homology groups of the termwise complex
([[thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]]),
so the termwise groups carry the finer $(j,h,d)$ trigrading while the
hyperhomology retains only $j-h$ up to filtration.

**Caveats.** The definition uses the chain-level Hochschild complexes and is
choice-free: the identification of $HH_h$ with $\operatorname{Tor}_h^{R^e}(R,-)$
assumes the Axiom of Choice and is *not* needed here. The trigrading $(j,h,d)$
(Rouquier degree, Hochschild degree, internal degree) is not the trigrading
$(a,q,t)$ of the comparison, which is fixed in
[[lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings]];
the source's HHH is the cohomology of the termwise complex, that is the second
page of the spectral sequence, not the hyperhomology abutment.

## Remarks

The difference between the termwise theory and the total Hochschild
hyperhomology is worked out on the later examples page in
[[ex-termwise-and-total-hochschild-theories-have-different-grading-outputs]];
nothing in the definition depends on that item.

## Facts & Assumptions

**Given:** the reduced ring $R$, the generator complex $F(\sigma)$ of
[[def-khovanovs-hhh-rouquier-generator-complexes]], and the Hochschild chain
complexes $C_\bullet(R,-)$ of [[def-hochschild-chain-complex-of-a-bimodule]].

[L1] $F(\sigma)$ is a bounded complex of graded $(R,R)$-bimodules, every
differential is a degree-zero map of $R$-bimodules, and each term is a finitely
generated free graded $R$-module
([[def-khovanovs-hhh-rouquier-generator-complexes]],
[[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

[L2] $C_h(R,M)=M\otimes_{\mathbb Q}R^{\otimes_{\mathbb Q}h}$ for $h\ge1$ and
$C_0(R,M)=M$, with faces $\delta_i$ and boundary $b_h=\sum_i(-1)^i\delta_i$;
$HH_h(R,M)=H_h(C_\bullet(R,M))$, and a map of $R$-bimodules induces a chain map
of the Hochschild complexes
([[def-hochschild-chain-complex-of-a-bimodule]]).

[L3] If every differential $d_F^i\colon F^i\to F^{i+1}$ of a bounded complex
$F$ of $k$-central $A$-bimodules is a map of $A$-bimodules, then the induced
maps $HH_j(A,d_F^i)$ make $\bigl(HH_j(A,F^\bullet),HH_j(A,d_F^\bullet)\bigr)$ a
cochain complex, with $H^i(HH_j(A,F^\bullet))$ its cohomology; the construction
is not defined to coincide with the hyperhomology, and its relationship to the
hyperhomology is through the spectral sequence
([[def-termwise-hochschild-homology-complex-and-iterated-homology]]).

[L4] The Hochschild hyperhomology $\mathrm{HH}^{\mathrm{hyper},n}(A,F)$ of a
bounded complex of $k$-central $A$-bimodules is the cohomology of the total
complex $T^\bullet(A,F)$ with $D=d_F+(-1)^ib$ on the summand
$C_j(A,F^i)$, and the iterated homology of the termwise complex is the second page of the associated
spectral sequence, which abuts to the hyperhomology with the image filtration
([[def-hochschild-hyperhomology-of-a-bimodule-complex]],
[[thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]]).



## Proof

**Proof technique:** direct.

1.1 Each differential of $F(\sigma)$ commutes with the Hochschild faces, hence induces a chain map of the Hochschild complexes. By [L1] $d^j$ is a degree-zero map of $R$-bimodules; by [L2] the Hochschild faces are built from the bimodule actions and multiplication in $R$, so $d^j\circ\delta_i=\delta_i\circ d^j$ for every face, and therefore $d^j$ commutes with the boundary $b$ and defines a chain map $C_\bullet(R,F(\sigma)^j)\to C_\bullet(R,F(\sigma)^{j+1})$. [L1, L2, given, algebra]

2.1 The induced maps make a cochain complex in each Hochschild degree. Since $d^{j+1}d^j=0$ as bimodule maps, the composite chain map is induced by the zero map, hence is zero and induces the zero map on homology; identities induce identities and composition is respected because the construction is functorial in the coefficient bimodule. By [L3] the family $\bigl(HH_h(R,F(\sigma)^\bullet),HH_h(R,d^\bullet)\bigr)$ is therefore a cochain complex of graded $\mathbb Q$-vector spaces for every $h$, with cohomology $H^j$ as in the definition. [L1, L2, L3, step 1.1, algebra]

3.1 The trigrading is well defined and finite in each degree. The internal grading is preserved by [L1], so all induced Hochschild maps have degree zero. For fixed $h$ and internal degree $d$, the chain group $F(\sigma)^j\otimes_{\mathbb Q}R^{\otimes h}$ has finite-dimensional degree-$d$ part: $F(\sigma)^j$ is a finite direct sum of shifts of the positive-degree polynomial ring $R$, and the other $h$ factors are the same polynomial ring, so only finitely many monomials of the required total degree occur. Its subquotient $HH_h$ and the subsequent bounded cochain homology therefore have finite-dimensional graded pieces. Thus $HHH^{j,h,d}$ is defined for every $j\in\mathbb Z$, $h\ge0$, $d\in\mathbb Z$; the possible $j$ are bounded by the finite word complex. [L1, L2, L3, step 2.1, algebra]

4.1 Distinguish termwise from total. By [L4] the total hyperhomology complex combines $b$ and $d_F$ into one differential, its homology is the abutment, and the iterated homology of the termwise complex of step 2.1 is the second page of the spectral sequence; consequently the termwise groups carry the separate $(j,h,d)$ trigrading whereas the hyperhomology retains the total degree and the internal degree together with a finite filtration. The definition therefore records the second-page groups, as in the source, and asserts nothing about degeneration of the spectral sequence. [L4, step 2.1, algebra] ∎ 