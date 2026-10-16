---
id: lem-qc-clifford-t-denominator-descent-and-base
kind: lemma
title: Clifford+T denominator descent and finite base table
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-denominator-exponent
  - lem-qc-single-qubit-ring-unitary-form
  - lem-qc-squared-entry-denominator-bound
  - lem-qc-sqrt-two-divisibility-criterion
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - lem-qc-denominator-exponent-well-defined
  - def-qc-clifford-t-gate-library
  - lem-qc-clifford-t-entry-ring
  - def-qc-cyclotomic-bullet-automorphism
  - lem-qc-dyadic-cyclotomic-unit-circle
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
    - title: "de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
dependency_level: 12
---

## Statement

Let $(u,v)^T$ be a unit vector with entries in $D$, and put
$s=\operatorname{sde}(|u|^2)$. If $s>3$, then some $k\in\{0,1,2,3\}$ has

$$\operatorname{sde}\!\left(\left|\frac{u+\omega^{-k}v}{\sqrt2}\right|^2\right)=s-1.$$

Moreover, every such unit column with $s\le3$ is prepared exactly from
$|0\rangle$ by a word in $H,T,T^\dagger$. A complete coefficient-and-word
table for the finite base set is recorded at
`research/quantum-computing-algorithms-60-2026-10-15-batch-13-finite-certificates.json`.

## Facts & Assumptions

**Given:** $|u|^2+|v|^2=1$, entries in $D$, $\omega^4=-1$, and the exact H/T matrices.

[F1] [[def-qc-denominator-exponent]]: $\operatorname{sde}(z)$ is the least integer $r$ with $(\sqrt2)^rz\in O$, and $\operatorname{sde}(0)=-\infty$.

[F2] [[lem-qc-squared-entry-denominator-bound]]: for nonzero $z$, $\operatorname{sde}(|z|^2)=2\operatorname{sde}(z)-m$ for some $m\in\{0,1\}$.

[F3] [[lem-qc-sqrt-two-divisibility-criterion]]: for $x=a+b\omega+c\omega^2+d\omega^3$, $\sqrt2\mid x$ iff $a+c$ and $b+d$ are even; also $x\bar x=P+\sqrt2Q$ with $P=\sum a_j^2$ and $Q=a(b-d)+c(b+d)$.

[F4] [[lem-qc-cyclotomic-scaled-grid-finiteness]]: if $|z|,|z^\bullet|\le1$, then $\operatorname{sde}(z)\ge0$ and the coefficients of $(\sqrt2)^{\operatorname{sde}(z)}z$ have absolute value at most $2^{\operatorname{sde}(z)/2}$.

[F5] [[def-qc-clifford-t-gate-library]]: $H$ maps $(u,v)$ to $((u+v)/\sqrt2,(u-v)/\sqrt2)$, while $T^k$ multiplies the lower entry by $\omega^k$.

[F6] [[def-qc-cyclotomic-bullet-automorphism]]: the four embeddings are the identity, complex conjugation, $\bullet$, and their composite; $\bullet$ commutes with complex conjugation.

[F7] [[lem-qc-dyadic-cyclotomic-unit-circle]]: if $z\in D$ and $z\bar z=1$, then $z=\omega^j$ for some $j\in\{0,\ldots,7\}$.

## Proof


1.1 For a nonzero real element $P+\sqrt2Q\in\mathbb Z[\sqrt2]$, define $\nu(P+\sqrt2Q)$ as the largest $r\ge0$ for which $(\sqrt2)^r$ divides it in $O$. This maximum exists: divisibility by $(\sqrt2)^{2q}=2^q$ forces both integer coefficients $P,Q$ to be divisible by $2^q$, which cannot hold for arbitrarily large $q$ unless the element is zero. If $y=(\sqrt2)^j y_0$ with $\sqrt2\nmid y_0$, then the definition of sde gives $\operatorname{sde}(y/(\sqrt2)^r)=r-j$. [F1, given, algebra]

1.2 Applying each embedding of $K$ to $|u|^2+|v|^2=1$ preserves the identity by [F6]; hence every embedding of each entry has modulus at most $1$. Since $s>3$, $u\ne0$. If $v=0$, then $|u|^2=1$ and $s=0$, a contradiction, so $v\ne0$ as well. Let $r_u=\operatorname{sde}(u)$ and $r_v=\operatorname{sde}(v)$. From [F2] and $s>3$, $r_u\ge2$. More generally, if $\max(r_u,r_v)\ge1$ and the exponents differ, the same argument below gives a contradiction. If $r_u>r_v$, set $x=(\sqrt2)^{r_u}u$ and $y=(\sqrt2)^{r_v}v$. Then $x\bar x+2^{r_u-r_v}y\bar y=2^{r_u}$; the right side and second term lie in $2O$, so $x\bar x\in2O$. Write $x=a_0+a_1\omega+a_2\omega^2+a_3\omega^3$. By [F3], $x\bar x=P+\sqrt2Q$ with $P=\sum a_j^2$ and $Q=a_0(a_1-a_3)+a_2(a_1+a_3)$. If $P,Q$ are both even, then $a_0+a_2$ and $a_1+a_3$ have equal parity because $P\equiv(a_0+a_2)+(a_1+a_3)\pmod2$, while $Q\equiv(a_0+a_2)(a_1+a_3)\pmod2$ forces both even. Then [F3] gives $\sqrt2\mid x$, contradicting the minimality of $r_u$. Since $x\bar x\in2O$ would make both $P,Q$ even in the power basis, this is impossible. If $r_v>r_u$, interchange $u,v$ and use the same calculation with the larger exponent. Thus $r_u=r_v=:r$. Write $x=(\sqrt2)^ru$ and $y=(\sqrt2)^rv$. Their minimal exponents make both primitive with respect to $\sqrt2$. The same parity argument shows $x\bar x$ and $y\bar y$ are not divisible by $2$, so their divisibility by $\sqrt2$ is either zero or one. Since $r\ge2$, $x\bar x+y\bar y=2^r$ is divisible by $\sqrt2$; exactly one of the two norms cannot be divisible by $\sqrt2$, since then their sum would not be divisible by it. Hence $\nu(x\bar x)=\nu(y\bar y)=j\in\{0,1\}$. Also $r\ge0$ by [F4], since the entries and their $\bullet$-conjugates are all in the unit disk. [F1, F2, F3, F4, F6, given, algebra]

2.1 The squared-entry identity [F2] gives $s=2r-j$. If $r\ge3$, then $x\bar x+y\bar y=2^r$, so the integer forms $P(x),Q(x),P(y),Q(y)$ satisfy $P(x)+P(y)\equiv Q(x)+Q(y)\equiv0\pmod8$. For a real element $P+\sqrt2Q$, direct successive division by $\sqrt2$ gives $\nu\ge1\iff2\mid P$, $\nu\ge2\iff2\mid P,Q$, $\nu\ge3\iff4\mid P$ and $2\mid Q$, and $\nu\ge4\iff4\mid P,Q$. These tests depend only on the four coefficients modulo $8$ for every requested exponent through $4$. The finite checker enumerates all $4096$ vectors in $(\mathbb Z/8)^4$, groups the $3072$ vectors with $\nu=0$ or $1$, and checks all $393216$ compatible residue pairs. For every pair and each $d=1,2,3$, it finds a $k\in\{0,1,2,3\}$ with $\nu(|x+\omega^{-k}y|^2)=j+d$; all $1,179,648$ negative-power targets pass. Taking $d=3$ yields $\operatorname{sde}(|(u+\omega^{-k}v)/\sqrt2|^2)=2(r+1)-(j+3)=s-1$. The same code checks the positive-power form as a cross-check. [F1, F2, F3, step 1.2, algebra]

2.2 The only remaining case with $s>3$ is $r=2,j=0$, so $s=4$. Here $x=2u,y=2v$ satisfy $|x|^2+|y|^2=4$. The four embedding bounds and Fourier coefficient formula in [F4] give $|x_i|,|y_i|\le2$. The checker therefore exhausts all integral coefficient vectors in $[-2,2]^4$ for both columns, retains the $256$ normalized pairs with $\nu(|x|^2)=0$, and verifies for each a $k\in\{0,1,2,3\}$ that $\operatorname{sde}(|(x+\omega^{-k}y)/(\sqrt2)^3|^2)=3$. This proves descent at the boundary $s=4$. [F2, F3, F4, step 1.2, algebra]

2.3 Suppose $s\le3$. If $u\ne0$, [F2] gives $\operatorname{sde}(u)\le2$; if $u=0$, its assigned exponent is $-\infty$. If $v=0$, the unit-circle result [F7] gives $u=\omega^j$, so its power-basis coefficients have absolute value at most $1$. If $u=0$, [F7] gives $v=\omega^j$, with the same coefficient bound. In the remaining case both entries are nonzero. The embedding bounds from step 1.2 and [F4] give nonnegative exponents for both. If either exponent is positive, the unequal-exponent contradiction in step 1.2 forces them equal, so both are at most $2$; if neither is positive, both are $0$. Thus [F4] bounds every numerator coefficient by $2$. The exact enumeration in the certificate contains all such columns: it finds $1537$ possible entries and exactly $208$ normalized columns, with squared-entry exponents $-\infty,0,2,3$ occurring $8,8,64,128$ times. Exact breadth-first search from $(1,0)$ using $H,T,T^\dagger$ reaches every one of the $208$ columns; the stored shortest words have maximum length $16$ and the search visits $7660$ states. Every stored word is re-evaluated by exact rational coefficient arithmetic. Therefore the table prepares every base column. [F2, F4, F5, F7, step 1.2, algebra]

3.1 The certificate is generated by the exact arithmetic program `research/quantum-computing-algorithms-60-2026-10-15-batch-13-finite-certificates.py`; the complete rows and all residue/boundary counts are in the adjacent JSON. The bounds in step 2.1 and step 2.2 and step 2.3 prove the enumerated finite sets contain every required case, so the checks prove the descent and base assertions rather than sampling them. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

The base table is a state-preparation table. For a full unitary, prepare its
first column, then use [[lem-qc-dyadic-cyclotomic-unit-circle]] to correct the
remaining determinant phase by a power of $T$.

## Unresolved supplier checks

The local finite descent and base table are complete. The actual QC07 exact
H/T matrices and QC09 circuit-semantics body were inspected; the matrix
products and chronological word order agree with this proof. This is interface
reconciliation, not acceptance of those draft suppliers.
