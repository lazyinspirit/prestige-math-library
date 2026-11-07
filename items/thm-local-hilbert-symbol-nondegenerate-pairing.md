---
id: thm-local-hilbert-symbol-nondegenerate-pairing
kind: theorem
title: "The local Hilbert symbol is a nondegenerate pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - lem-local-hilbert-symbol-is-well-defined-and-bilinear
  - thm-local-hilbert-symbol-cup-product-norm-criterion
  - thm-local-artin-reciprocity-and-norm-index
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-kummer-pairing-is-perfect
  - thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
  - cor-order-and-exponent-from-invariant-factors
  - cor-finite-subgroups-of-units-in-a-domain-are-cyclic
proof_strategy: direct
axiom_use: >-
  The finite n-th-power quotient argument is choice-free. AC and DC are used
  only when the local class-field and norm-index suppliers are instantiated.
  The published finite Kummer-pairing result is choice-free in its stated
  field-theoretic hypotheses.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV §5.1"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Properties (5)–(6) and the nondegenerate-pairing corollary, printed pp.143–145."
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter III §4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Theorem 4.4(c)–(d) and its proof, printed pp.113–114."
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be a complete discretely valued field with finite
residue field, let $K_s$ be a separable closure, and let $K^{\mathrm{ab}}$
be the maximal abelian extension in $K_s$. Let $n\ge1$, assume $p\nmid n$
if $\operatorname{char}K=p>0$, and suppose that the group $\mu_n$ of
$n$-th roots of unity in $K_s$ is contained in $K$. Write
$\widehat{K^\times}$ for the profinite completion and let
$\operatorname{rec}_K:\widehat{K^\times}\to
\operatorname{Gal}(K^{\mathrm{ab}}/K)$ be the local Artin map normalized
so a uniformizer maps to arithmetic Frobenius on every finite unramified
extension. Assume that for every finite abelian extension $L/K$, the induced
map $K^\times/N_{L/K}(L^\times)\to\operatorname{Gal}(L/K)$ is an
isomorphism. For $a,b\in K^\times$, let $\bar a$ be the image of $a$ in
$\widehat{K^\times}$, choose $\beta\in K_s$ with $\beta^n=b$, and define
$$
(a,b)_{K,n}=\frac{\operatorname{rec}_K(\bar a)(\beta)}{\beta}.
$$
Since $\mu_n\subseteq K$, the extension $K(\beta)/K$ is cyclic and
abelian. The local Hilbert symbol induces a pairing
$$
K^\times/K^{\times n}\times K^\times/K^{\times n}\longrightarrow\mu_n
$$
whose left and right kernels are both trivial.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-kummer-pairing-is-perfect]]

## Facts & Assumptions

**Given:** AC and DC; the field, integer, and roots of unity in the
Statement; and the supplied local Artin and Kummer-pairing interfaces.

[F1] The Hilbert symbol factors through $K^\times/K^{\times n}$ in both
arguments. [[lem-local-hilbert-symbol-is-well-defined-and-bilinear]]

[F2] The cup/norm criterion retains its explicit supplied-data and AC/DC norm-kernel premises. The proof here obtains its needed norm equivalence directly from the supplied root action and [F3], and does not infer unqualified existence from the cup identity. [[thm-local-hilbert-symbol-cup-product-norm-criterion]]

[F3] For every finite abelian extension $L/K$, the Artin map identifies
$K^\times/N_{L/K}L^\times$ with $\operatorname{Gal}(L/K)$, so the norm group
is proper when $L\ne K$. [[thm-local-artin-reciprocity-and-norm-index]]

[F4] If $B$ is a subgroup of $K^\times$ containing $K^{\times n}$ with finite
quotient, then the Kummer pairing
$\operatorname{Gal}(K(B^{1/n})/K)\times B/K^{\times n}\to\mu_n$ is
nondegenerate in both variables. [[thm-kummer-pairing-is-perfect]]

[F5] $K$ is complete for a surjective discrete valuation with finite residue
field and has a uniformizer. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F6] A finite abelian group is a product of cyclic invariant factors, whose product is its order and whose largest factor is its exponent. Finite subgroups of field units are cyclic. [[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]] [[cor-order-and-exponent-from-invariant-factors]] [[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]

[A1] AC and DC are assumptions for the local class-formation and Artin norm
branch used through [F2]–[F3]. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** separate the two radicals using local norms and the
maximal exponent-$n$ Kummer extension.

**Given:** The data above.

1.1 Let $c=v_K(n)$ when $\operatorname{char}K=0$, and $c=0$ when $\operatorname{char}K>0$. Choose $m=2c+1$ and put $U_m=1+\mathfrak m_K^m$. For $u\in U_m$, apply Newton iteration to $f(X)=X^n-u$ starting at $x_0=1$. If $x_j\equiv1\pmod{\mathfrak m_K^{c+1}}$ and $t_j=v_K(f(x_j))>2c$, then $v_K(f'(x_j))=c$ and the correction $d_j=-f(x_j)/f'(x_j)$ has valuation $t_j-c>c$. Taylor expansion gives $v_K(f(x_j+d_j))\ge2(t_j-c)>t_j$, and in fact $t_{j+1}-2c\ge2(t_j-2c)$. Thus the corrections tend to zero, the iterates converge by completeness, and their limit is an $n$-th root of $u$. Consequently $U_m\subseteq K^{\times n}$. [F5, given, construct, algebra]

1.2 Fix a class $b\notin K^{\times n}$. Then $L_b=K(\sqrt[n]{b})$ is a nontrivial finite cyclic extension. By [F3] its norm subgroup is proper, so choose $a\notin N_{L_b/K}L_b^\times$. The value $(a,b)_{K,n}$ is $1$ exactly when the supplied Artin action fixes the chosen root of $b$, hence exactly when its restriction to $L_b$ is trivial. By the norm-kernel property [F3] this is exactly the norm condition, so the chosen $a$ has $(a,b)_{K,n}\ne1$. Thus the right kernel is trivial, using only the literal supplied finite norm kernels and root-action formula. [A1, F1, F3, given, choose]

2.1 The quotient $K^\times/(\langle\pi_K^n\rangle U_m)$ is finite: the valuation contributes $n$ residue classes and $\mathcal O_K^\times/U_m$ is finite because it injects into the unit group of the finite ring $\mathcal O_K/\mathfrak m_K^m$: its $m$ successive additive quotients $\mathfrak m_K^i/\mathfrak m_K^{i+1}$ are copies of the finite residue field, by multiplying residue representatives by $\pi_K^i$. Since $\langle\pi_K^n\rangle U_m\subseteq K^{\times n}$, the quotient $K^\times/K^{\times n}$ is finite as well. [F5, step 1.1, algebra]

3.1 Let $M=K(K^{\times\,1/n})$ be the compositum of the fields $K(\sqrt[n]{b})$ for $b\in K^\times$. Step 2.1 makes $A=K^\times/K^{\times n}$ finite, so choose finitely many representatives and their roots. Every other root is one of these times an element of $K$ and an element of $\mu_n$, so these roots generate $M$. Its Galois group $B=\operatorname{Gal}(M/K)$ acts faithfully on that finite list of roots by elements of $\mu_n$; hence it embeds in a finite product of $\mu_n$, and is finite abelian of exponent dividing $n$. If $(a,b)_{K,n}=1$ for every $b$, then $\operatorname{rec}_K(\bar a)$ fixes every chosen $n$-th root and hence restricts trivially to $M$. By [F3], $a\in N_{M/K}M^\times$. Also $K^{\times n}\subseteq N_{M/K}M^\times$: the Artin image of $a_0^n$ has trivial restriction because $\operatorname{Gal}(M/K)$ has exponent dividing $n$. [A1, F1, F3, step 2.1, given]

4.1 Apply [F4] with the subgroup $K^\times$. We supply the finite cardinality argument explicitly. Both $A$ and $B$ from step 3.1 are finite abelian groups of exponent dividing $n$, and the Kummer pairing injects $A$ into $\operatorname{Hom}(B,\mu_n)$ and $B$ into $\operatorname{Hom}(A,\mu_n)$. For any finite abelian $C$ of exponent dividing $n$, [F6] writes $C=\prod_i C_{d_i}$ with each $d_i\mid n$. A homomorphism from $C_{d_i}$ to the cyclic group $\mu_n$ of order $n$ is specified by any image killed by $d_i$, and there are exactly $d_i$ such images. Thus $|\operatorname{Hom}(C,\mu_n)|=\prod_i d_i=|C|$, including the empty product for the trivial group. The two injections consequently imply $|A|=|B|=[M:K]$. By [F3], $[K^\times:N_{M/K}M^\times]=[M:K]$. The inclusion $K^{\times n}\subseteq N_{M/K}M^\times$ from step 3.1 and equality of these finite indices force $N_{M/K}M^\times=K^{\times n}$. Hence any element in the left radical is an $n$th power. Step 1.2 proved the right radical trivial, so the full pairing is nondegenerate. This includes $n=1$, for which both groups and their character groups are trivial. [A1, F3, F4, F6, step 2.1, step 1.2, step 3.1, algebra] ∎

