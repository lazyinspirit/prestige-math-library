---
id: lem-temperley-lieb-root-gram-rank-and-reflection-dimensions
kind: lemma
title: "Root Gram ranks give the reflected simple-head dimensions"
status: draft
dependency_level: 9
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [lem-temperley-lieb-annular-central-element-and-reflection-maps, lem-temperley-lieb-link-state-gram-determinant, lem-temperley-lieb-critical-standard-modules-are-simple, lem-temperley-lieb-link-state-gram-form-is-invariant, thm-temperley-lieb-link-state-dimension-formula, def-temperley-lieb-complex-critical-labels-and-reflection, def-temperley-lieb-quantum-integers-and-quantum-characteristic]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ridout–Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4 equations (4.9), (4.11); §5 Propositions 5.1 and 5.3, Corollary 5.2."
---

## Statement

Put $V_{n,p}=W_{n,n-2p}(\mathbb C,q+q^{-1})$, $R_{n,p}=\operatorname{rad}\phi_{n,n-2p}$ and $L_{n,p}=V_{n,p}/R_{n,p}$, allowing $L_{2p,p}=0$ when $\delta=0$. Let $\kappa=\operatorname{ord}(q^2)\ge2$. For a noncritical label write $n-2p+1=k\kappa+r$ with $1\le r<\kappa$. Then
$$\dim R_{n,p}=\begin{cases}\dim L_{n,p+r-\kappa},&p+r-\kappa\ge0,\\0,&p+r-\kappa<0.\end{cases}$$
More explicitly, set the dimensions of out-of-range modules to zero. At critical labels $\dim R_{n,p}=0$. At noncritical labels,
$$\dim R_{n,p}=\begin{cases}\dim R_{n-1,p}+\dim V_{n-1,p-1},&r=\kappa-1,\\\dim R_{n-1,p}+\dim R_{n-1,p-1},&r\ne\kappa-1.\end{cases}$$
The initial condition is $\dim R_{n,0}=0$. These formulas include $\kappa=2$ and the zero-form perfect-matching module.

## Facts & Assumptions

**Given:** $q\ne0$ and $\kappa\ge2$, the standard modules, their capping forms and the label convention.

[F1] The central spectral projections give the split restriction for noncritical labels ([[lem-temperley-lieb-annular-central-element-and-reflection-maps]]).

[F2] At generic $q$ all smaller-rank Gram determinants are nonzero ([[lem-temperley-lieb-link-state-gram-determinant]]).

[F3] Critical forms are nondegenerate ([[lem-temperley-lieb-critical-standard-modules-are-simple]]). The form is symmetric and invariant ([[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

[F4] $\dim V_{n,p}=\dim V_{n-1,p}+\dim V_{n-1,p-1}$ ([[thm-temperley-lieb-link-state-dimension-formula]]). Reflection is as in [[def-temperley-lieb-complex-critical-labels-and-reflection]].

[F5] The quantum integers satisfy $[a+1]_q=\delta[a]_q-[a-1]_q$ and vanish, for $q\ne\pm1$, precisely when $q^{2a}=1$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

## Proof

**Proof technique:** Specialize a regular orthogonal splitting, then compare the two dimension recursions.

1.1 First work at generic $q$. The rightmost-defect submodule has nondegenerate form by [F2], so its orthogonal complement is invariant and maps isomorphically to the restriction quotient. The smaller standards are simple by their rank-one diagram operators; an invariant form on such a standard is a scalar multiple of its nondegenerate standard form, because their associated maps into the dual differ by an endomorphism, and an endomorphism of a finite-dimensional complex simple module is scalar (take any eigenvalue). Subtracting the submodule projection from quotient basis lifts gives a unitriangular Gram splitting $G_{n,p}=U^{\mathsf T}(G_{n-1,p}\oplus\alpha_{n,p}G_{n-1,p-1})U$. Compute its scalar as follows. Group the link states into the four types: $n,n-1$ both defects; $n$ a defect and $n-1$ on an earlier arc; $(n-1,n)$ an arc; and $n$ on an arc ending earlier than $n-1$. Put $A=G_{n-2,p}$, $B=G_{n-2,p-1}$ and write the smaller-rank matrix as $G_{n-1,p}=\left(\begin{smallmatrix}A&AV_0\\V_0^{\mathsf T}A&V_0^{\mathsf T}AV_0+\alpha_{n-1,p}B\end{smallmatrix}\right)$. In the current off-diagonal Gram block the first column block is $(0,B)^{\mathsf T}$: types one and three have unmatched defects, while cutting the terminal arc in types two and three removes no closed component. The type-three diagonal block is $\delta B$, since the shared terminal arc closes one loop. If $(X,Y)^{\mathsf T}$ is the first column block of the projection coefficient matrix, multiplication by $G_{n-1,p}$ gives $AX+AV_0Y=0$ and $V_0^{\mathsf T}AX+(V_0^{\mathsf T}AV_0+\alpha_{n-1,p}B)Y=B$. Thus $X=-V_0Y$ and $Y=\alpha_{n-1,p}^{-1}I$. Its quadratic contribution is $\alpha_{n-1,p}^{-1}B$ after the four $V_0^{\mathsf T}AV_0$ terms cancel with coefficients $1-1-1+1$. Comparing the type-three block gives $\alpha_{n,p}=\delta-\alpha_{n-1,p}^{-1}$. At $n=2p$, deleting the terminal site closes exactly one additional component, so $G_{2p,p}=\delta G_{2p-1,p-1}$ and $\alpha_{2p,p}=\delta$. The recurrence solves to $\alpha_{n,p}=[n-2p+2]_q/[n-2p+1]_q$ by the quantum-integer recurrence. If the $A$ block is empty it is omitted; the same cancellation still holds. Now at a noncritical root, the two eigenvalues used for [F1] differ by $-(q-q^{-1})(q^{n-2p+1}-q^{-(n-2p+1)})\ne0$. The spectral projector onto the rightmost-defect summand is $(F_{n-1}-f_{n-1,p-1})/(f_{n-1,p}-f_{n-1,p-1})$. Its entries are rational functions regular at the root; subtracting this projection from each standard quotient lift gives a unitriangular splitting matrix $U$, also regular there. Since $F_{n-1}^*=F_{n-1}$ and the eigenvalues differ, the two summands are orthogonal. For generic $q$ this is exactly the orthogonal splitting just computed, since the submodule form is nondegenerate and its orthogonal complement is unique. Thus this Gram matrix identity is an identity of rational matrices regular at every noncritical root, and specializes there. This continuity argument applies to the entire matrix identity, rather than inferring a rank from a specialized determinant. If $n=2p$, there is only the quotient summand and direct capping gives $G_{2p,p}=\delta G_{2p-1,p-1}$, the same formula with $\alpha=[2]/[1]=\delta$. [F1, F2, F3, F5, given, algebra]

2.1 Since $\kappa\ge2$, $q\ne\pm1$; hence $[a]_q=0$ precisely when $\kappa\mid a$. At a noncritical label the denominator of $\alpha$ is nonzero and its numerator vanishes precisely when $r=\kappa-1$. The kernel dimension of the specialized block form in step 1.1 is therefore $\dim R_{n-1,p}+\dim V_{n-1,p-1}$ in that case, and $\dim R_{n-1,p}+\dim R_{n-1,p-1}$ otherwise. Critical labels give zero by [F3]; the all-defect form is $(1)$, giving $R_{n,0}=0$. For $n\ge1$, subtraction from [F4] gives the companion recursion, with initial $\dim L_{0,0}=1$: $\dim L_{n,p}=\dim V_{n,p}$ at critical labels; at noncritical labels it is $\dim L_{n-1,p}$ if $r=\kappa-1$, and $\dim L_{n-1,p}+\dim L_{n-1,p-1}$ otherwise. [F2, F3, F4, F5, step 1.1, algebra]

3.1 Prove the reflected-dimension formula by induction on $n$, with out-of-range labels assigned dimension zero. Write $a=p+r-\kappa$. If $r\notin\{1,\kappa-1\}$, neither predecessor is critical. Their reflection indices are respectively $a-1$ and $a$, so induction and step 2.1 give $\dim R_{n,p}=\dim L_{n-1,a-1}+\dim L_{n-1,a}$. The reflected label $a$ has remainder $\kappa-r$, which is also neither $1$ nor $\kappa-1$; its companion recursion gives exactly $\dim L_{n,a}$. [F4, step 2.1, algebra]

3.2 When $\kappa=2$, every noncritical label has $r=1=\kappa-1$ and both predecessors are critical. The radical recursion gives $\dim R_{n,p}=\dim V_{n-1,p-1}=\dim L_{n-1,p-1}$. Since $a=p-1$ and the companion recursion at $(n,a)$ also has remainder $1$, this is $\dim L_{n,a}$. The same formula holds for $n=2p$: it gives $\dim R_{2p,p}=\dim V_{2p-1,p-1}=\dim V_{2p,p}$, as required by the identically zero form. [F3, F4, step 2.1, algebra]

4.1 If $r=\kappa-1$ and $\kappa>2$, the predecessor $(n-1,p-1)$ is critical, while $(n-1,p)$ has reflected index $a-1$. Consequently $\dim R_{n,p}=\dim L_{n-1,a-1}+\dim V_{n-1,p-1}$. Here $a=p-1$, and criticality gives $V_{n-1,p-1}=L_{n-1,a}$. The companion recursion at $(n,a)$ has remainder $1\ne\kappa-1$, so this sum is $\dim L_{n,a}$. If $r=1$ and $\kappa>2$, $(n-1,p)$ is critical and its radical is zero; the reflection of $(n-1,p-1)$ has index $a$. Thus $\dim R_{n,p}=\dim L_{n-1,a}$. The reflected label at rank $n$ has remainder $\kappa-1$, whose companion recursion is precisely $\dim L_{n,a}=\dim L_{n-1,a}$. [F3, F4, step 2.1, step 3.1, algebra]

5.1 The initial $p=0$ case has $a<0$ and zero radical. All predecessor terms whose indices leave the allowed range are zero. In particular the recursions in the preceding cases give zero when $a<0$; when $a=0$ they use the initial all-defect dimension $1$. These boundary rules also cover $n=0,1$. The induction establishes the stated formula for present reflected labels and the zero radical for absent labels. [F4, step 2.1, step 3.1, step 4.1, step 3.2, algebra] ∎
