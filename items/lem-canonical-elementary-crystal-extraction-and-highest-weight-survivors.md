---
id: lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors
kind: lemma
title: "Canonical elementary crystal extraction and highest-weight survivors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [def-axiom-of-choice,
       lem-klr-one-step-simple-restriction-induction-and-first-dot-index,
       lem-klr-two-color-jump-formula-and-strict-elementary-embeddings,
       lem-finite-support-regularization-of-quantum-label-weight-modules,
       def-kashiwara-skew-derivations-on-the-negative-quantum-half,
       lem-divided-power-half-has-integral-skew-string-coefficients,
       thm-the-i-string-decomposition-of-the-negative-half,
       thm-crystal-basis-of-the-negative-half,
       lem-crystal-operators-commute-with-highest-weight-projection-modulo-q,
       lem-highest-weight-tensor-maps-and-their-adjunction,
       thm-grand-loop-existence-of-highest-weight-crystal-bases,
       thm-crystal-basis-tensor-product-rule,
       lem-negative-half-reversal-preserves-integral-and-crystal-lattices,
       lem-string-ideal-decomposition-of-the-integral-lattices,
       lem-string-ideal-triples-are-balanced,
       thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module,
       thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis,
       thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6: the identification of the simple-module crystal with B(infinity) and with B(Lambda) after the cyclotomic quotient."
    - title: "Aaron D. Lauda and Monica Vazirani, Crystals from categorified quantum groups, Advances in Math. 228 (2011) 803-861, arXiv:0909.1810v2"
      url: "https://arxiv.org/pdf/0909.1810v2"
      locator: "Sections 2.5-2.6 and 6: the socle/head crystal operators, the survival condition epsilon_i(M)<=lambda_i, and Theorems 6.10-6.11."
---

## Statement

For every real symmetrizable Cartan datum, the canonical negative-half crystal
has strict elementary embeddings
$\Psi_i(b)=\bar b\otimes b_i(-c_i(b))$, where $c_i(b)=\epsilon_i(*b)$,
$\bar b=(e_i^*)^{c_i(b)}b$, $c_i(\bar b)=0$, and every nonvacuum vertex has
positive extraction for some $i$. The negative-half reversal $*$ permutes
$B(\infty)$ without signs; this unsigned conclusion is proved from the existing
signed lattice theorem and positive highest-weight tensor residues, not
assumed. The survivors of $\pi_\lambda$ are exactly $c_i(b)\le\lambda_i$ for
all $i$; with weight $\lambda+\operatorname{wt}(b)$, inherited raising and
surviving lowering, and $\epsilon/\varphi$, they are $B(\lambda)$. Any two
lowering-generated, everywhere-lowerable negative crystals with strict
nonpositive elementary extractions and positive extraction at every nonvacuum
vertex are uniquely isomorphic by their lowering words; the proof uses finite
color cycles and terminates after a height bound. Consequently for any field
and any general homogeneous nondegenerate $Q$ of the first two lemmas, the
shift-orbit simple-module crystal is canonically $B(\infty)$, its first-strand
cyclotomic simple graph is $B(\lambda)$, and the graph labeled by
indecomposable projective COVERS $P(S)$ is the same graph under the unscaled
cover--simple pairing. Projective crystal operators here mean operators
transported on cover labels; no arbitrary $\#$-dual-of-simple identification,
generic global-basis theorem, or independent linear Kashiwara action on the
projective class is used.

## Facts & Assumptions

**Given:** A real symmetrizable Cartan datum, its negative quantum half and the
canonical external data listed in the dependencies.

[F1] The signed lattice theorems and the negative-half string machinery:
[[def-kashiwara-skew-derivations-on-the-negative-quantum-half]],
[[thm-the-i-string-decomposition-of-the-negative-half]],
[[thm-crystal-basis-of-the-negative-half]],
[[lem-divided-power-half-has-integral-skew-string-coefficients]],
[[lem-negative-half-reversal-preserves-integral-and-crystal-lattices]],
[[lem-string-ideal-decomposition-of-the-integral-lattices]] and
[[lem-string-ideal-triples-are-balanced]].

[F2] The highest-weight projection and crystal-comparison inputs:
[[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]],
[[lem-highest-weight-tensor-maps-and-their-adjunction]],
[[thm-grand-loop-existence-of-highest-weight-crystal-bases]],
[[thm-crystal-basis-tensor-product-rule]],
[[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]]
and [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]].

[F3] The categorified simplicity inputs
([[lem-klr-one-step-simple-restriction-induction-and-first-dot-index]],
[[lem-klr-two-color-jump-formula-and-strict-elementary-embeddings]],
[[lem-finite-support-regularization-of-quantum-label-weight-modules]]): the
shift-orbit simple-module crystal with its socle/head operators, the survival
criterion and the strict embeddings. The unscaled same-head cover pairing is supplied by [[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]].

[F4] The coproduct of [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]] is $\Delta F_j=F_j\otimes1+K_j\otimes F_j$, with $K_iF_jK_i^{-1}=q_i^{-a_{ij}}F_j$. The auxiliary realization of [[lem-finite-support-regularization-of-quantum-label-weight-modules]] supplies integral fundamental weights while preserving the negative-half relations, lattices, operators and all finite word computations.

[F5] The elementary crystal $B_i=\{b_i(n):n\in\mathbb Z\}$ has weight $n\alpha_i$, $\varepsilon_i=-n$, $\varphi_i=n$, $e_ib_i(n)=b_i(n+1)$ and $f_ib_i(n)=b_i(n-1)$; for $j\ne i$ its $\varepsilon_j,\varphi_j$ are $-\infty$ and its $j$-operators are zero. On abstract crystals use $\varepsilon_j(x\otimes y)=\max(\varepsilon_j(x),\varepsilon_j(y)-\langle h_j,\mathrm{wt}(x)\rangle)$ and $\varphi_j(x\otimes y)=\max(\varphi_j(y),\varphi_j(x)+\langle h_j,\mathrm{wt}(y)\rangle)$, with $e_j$ acting on the first factor when $\varphi_j(x)\ge\varepsilon_j(y)$ and on the second otherwise, and $f_j$ using the strict inequality $>$. These definitions apply to the elementary factors without an integrability hypothesis; their max formulas give associative tensor products and show that tensoring a strict injection with an identity is strict and injective.

## Proof

**Proof technique:** lift the right-string decomposition of the negative half
to lattice components, read the strict elementary embeddings off the top
residue, identify the survivors of the highest-weight projection, and use the
lattice comparison to identify the categorified simple graph.

1.1 The correctly oriented signed right-string decomposition. Put $e_i^*=*\tilde e_i*$, $f_i^*=*\tilde f_i*$ and $P_i^*=*P_i*$, where $P_i$ is the left-string projector of [F1]. Applying the anti-involution to the unique left decomposition of $*u$ gives $u=\sum_{n\ge0}v_nF_i^{(n)}$, with $v_n\in\ker(*e_i'*)$ and $v_n=q_i^{n(n-1)/2}P_i^*(*e_i'*)^nu$. In particular the divided powers are on the RIGHT. If $T_n=(e_i^*)^nu$, shifting this right decomposition gives $v_n=T_n-f_i^*T_{n+1}$; all these coefficients lie in the crystal lattice because the signed lattice theorem makes $e_i^*,f_i^*$ lattice-preserving. On its residue $e_i^*,f_i^*$ preserve the SIGNED crystal set and are partial inverses. For a residue $b$, let $c=\max\{n:(e_i^*)^nb\ne0\}$, finite by root height. Then for $n<c$ the residue of $v_n$ is zero by the partial-inverse identity, for $n=c$ it is $(e_i^*)^cb$, and for $n>c$ it is zero. Thus precisely one right-string coefficient has nonzero residue, and that top residue is a signed basis vector. This proves oriented extraction and signed uniqueness; it does not determine the sign of the extracted residue or prove the unsigned-star assertion. [F1, algebra]

2.1 Signed adaptation already determines the kernel. This calculation precedes the unsigned conclusion. By balanced uniqueness, the signed reversal of a global lift is the global lift of its signed residue. Reversing the adapted LEFT-string global basis therefore makes the saturated RIGHT ideal $U_q^-F_i^s$ the span of the global vectors whose signed right depth in step 1.1 is at least $s$; the signs do not change that span. The exact based kernel of [F2] is the sum of these right ideals at $s=\lambda_i+1$. A sum of subspaces spanned by subsets of one basis is spanned by the union of those subsets. Consequently $\pi_\lambda(b)\ne0$ precisely when every signed right depth satisfies $c_i(b)\le\lambda_i$, without presupposing unsigned star or elementary strictness. In particular, when $\lambda_i=0$ and the other coordinates exceed a fixed height bound, projection is a bijection from the positive vertices of that bound with $c_i=0$ to the corresponding highest-module vertices. For a surviving vertex, raising preserves survival: if $e_jb\ne0$ then $f_je_jb=b$, and lowering compatibility forces $\pi_\lambda(e_jb)\ne0$. Thus projection preserves every raising depth on survivors. [step 1.1, F1, F2, algebra]

2.2 Exact tensor coefficient comparison. Put $D_i=*e_i'*$. Write the part of $\Delta u$ whose second factor has degree $-n\alpha_i$ as $C_n(u)K_i^n\otimes F_i^{(n)}$. The coefficient is $C_n(u)=q_i^{n(n-1)/2}D_i^nu$. Indeed appending $F_j$ to a word gives $C_n(uF_j)=q_i^{-na_{ij}}C_n(u)F_j+\delta_{ij}[n]_iC_{n-1}(u)$, with $C_0(u)=u$ and $C_n(1)=0$ for $n>0$. The right Leibniz rule gives $D_i(uF_j)=q_i^{-a_{ij}}D_i(u)F_j+\delta_{ij}u$; iterating it gives the same recurrence for $q_i^{n(n-1)/2}D_i^n$, since $1+q_i^{-2}+\cdots+q_i^{-2(n-1)}=q_i^{-(n-1)}[n]_i$. This proves the formula on words and by linearity on the Serre quotient. Hence if $D_iv=0$ the only pure-$i$ second component of $\Delta v$ is $v\otimes1$. Also $\Delta F_i^{(r)}=\sum_{s=0}^rq_i^{-s(r-s)}F_i^{(r-s)}K_i^s\otimes F_i^{(s)}$, by expanding the two $q_i^{-2}$-commuting summands of [F4]. Choose auxiliary dominant weights with $\lambda_i=0$, $\lambda_j$ arbitrarily large for $j\ne i$, $\mu=m\Lambda_i$ and $m$ arbitrarily large. For the right decomposition $u=\sum_rv_rF_i^{(r)}$ of step 1.1, project $\Phi_{\lambda,\mu}\pi_{\lambda+\mu}(u)=\Delta u(v_\lambda\otimes v_\mu)$ onto the direct sum of second-factor weights $\mu-r\alpha_i$. Since $F_i v_\lambda=0$, the terms $s<r$ vanish and $K_i^rv_\lambda=v_\lambda$. The resulting exact field-vector identity is $\sum_r\pi_\lambda(v_r)\otimes F_i^{(r)}v_\mu$. No unsigned-star assertion has entered this coefficient computation. [step 1.1, F1, F2, F4, algebra]

3.1 Positivity of the extracted coefficient. Fix a height bound $H$ and take $m>H$ and the other $\lambda_j$ large enough that $\lambda+\mu$ projects isomorphically in degrees of height at most $H$, while $\varphi_j(x)>H$ for every first-factor vertex $x$ of those degrees and $j\ne i$. The tensor map is lattice-preserving by the grand loop and commutes with the module string operators. Its image of a positive negative-half lowering word is therefore a positive tensor-basis vertex: start at $v_\lambda\otimes v_\mu$ and apply the same lowering word, using [F2]. It is nonzero because the reverse tensor map is lattice-preserving and their composite is the identity. Throughout these bounded words the second factor stays on its pure-$i$ string. In fact for $j\ne i$ that factor has $\varepsilon_j=0$ (as $E_jF_i^{(n)}v_\mu=0$), and the large first-factor $\varphi_j$ selects the first tensor branch; the $i$-operator either acts on the first factor or advances that pure-$i$ string. Now take a lattice lift $u$ of a positive vertex $b$. Step 1.1 gives exactly one nonzero coefficient residue, at $c=c_i(b)$, equal to a signed vertex $\bar b$ with $c_i(\bar b)=0$. By step 2.1 its projection $\pi_\lambda(\bar b)$ is nonzero. The direct second-weight projection preserves the tensor lattice, so the identity of step 2.2 gives the tensor residue $\pi_\lambda(\bar b)\otimes f_i^cv_\mu$. Its positivity forces $\bar b$ to be positive, since the positive residue projection is a bijection on the $c_i=0$ survivors and a negative residue projects to its negative. Thus the actual extraction of every positive vertex has a positive first component. [step 1.1, step 2.1, step 2.2, F2, F4, algebra]

4.1 Strictness in both branches and every color. Define $\Psi_i(b)=\bar b\otimes b_i(-c)$ using the elementary crystal and abstract tensor conventions of [F5]. It is injective because signed partial inverses recover $b=(f_i^*)^c\bar b$. To check an operator, enlarge the finite height bound to include the vertex and its one-step neighbors and use the same $\lambda,\mu$ throughout. Step 3.1 identifies the positive tensor lift with $\pi_\lambda(\bar b)\otimes f_i^cv_\mu$. Projection preserves raising depths on survivors by step 2.1, so $\varepsilon_i(\pi_\lambda\bar b)=\varepsilon_i(\bar b)$ and, since $\lambda_i=0$, $\varphi_i(\pi_\lambda\bar b)=\varphi_i(\bar b)$. The second factor has $\varepsilon_i=c$. The finite tensor rule therefore sends $e_i$ to the first factor if $\varphi_i(\bar b)\ge c$, and to the second if $\varphi_i(\bar b)<c$; it sends $f_i$ to the first if $\varphi_i(\bar b)>c$, and to the second if $\varphi_i(\bar b)\le c$. These are exactly the two elementary branches, including their different equality choices. For $j\ne i$ the large first-factor $\varphi_j$ selects the first factor for both operators; the elementary factor, with $\varepsilon_j=\varphi_j=-\infty$, selects that same factor. Applying step 3.1 to the resulting neighbor and using uniqueness of the surviving first-factor lift identifies its actual extraction with this computed tensor result. If the first-factor raising is zero, both calculations give zero; lowering has no end in the half, and $m>H$ avoids the finite second-factor end. The finite tensor max formula gives $\varepsilon_i(b)=\max(\varepsilon_i(\bar b),c-\langle h_i,\mathrm{wt}(\bar b)\rangle)$ and $\varepsilon_j(b)=\varepsilon_j(\bar b)$ for $j\ne i$, because the large $\lambda_j$ suppress the second term there. Subtracting the auxiliary highest weights gives the elementary weight formula, and $\varphi=\varepsilon+\langle h,\mathrm{wt}\rangle$ gives all $\varphi$ identities. Thus $\Psi_i$ is an actual strict positive elementary embedding in every color, using only integrable tensor crystals for the finite calculation. [step 2.1, step 3.1, F2, F4, F5, algebra]

5.1 Unsigned star and positive extraction. For each positive $b$, the signed partial inverse gives $(e_i^*)^cb=\bar b>0$ and $b=(f_i^*)^c\bar b$. Applying signed extraction to each intermediate $(e_i^*)^rb$ gives the same positive top component $\bar b$ and position $c-r$. A negative intermediate residue would instead have a negative top component by linearity and step 3.1, so every intermediate is positive. Likewise, for a positive right-primitive vertex $a$ and $n\ge0$, the signed vertex $(f_i^*)^na$ has top coefficient $a$ and depth $n$, and cannot be negative because the extraction of a negative vertex has negative top coefficient. Thus the right operators preserve the positive crystal wherever nonzero. Every nonvacuum $b$ has some $c_i(b)>0$: its signed reversal has the same positive height, and its underlying positive vertex is a nonempty lowering word, hence has a nonzero raising in some color. Now induct on height. The vacuum is star-fixed; choose $i$ with $c=c_i(b)>0$. Its positive extracted $\bar b$ has smaller height, so $*\bar b$ is positive by induction. Reversing $b=(f_i^*)^c\bar b$ gives $*b=f_i^c(*\bar b)$, which is positive. Involutivity proves $*B(\infty)=B(\infty)$ without signs, and the previously defined signed depth is now exactly $\varepsilon_i(*b)$. All auxiliary computations involved only finitely many degrees and colors and preserve the original negative half, so the conclusions hold for the original real symmetrizable datum. [step 1.1, step 3.1, step 4.1, F1, F2, F4, algebra]

6.1 Survivors of the highest-weight projection. The projection $\pi_\lambda$ kills exactly the negative-half crystal vertices with $c_i(b)>\lambda_i$ for some $i$, by the signed adapted-kernel computation of step 2.1 and the unsigned conclusion of step 5.1. This is a consequence of the actual sum of based right ideals, not a presupposed elementary embedding or survivor comparison. The crystal-lattice comparison of [F2] makes the projection commute with the crystal operators modulo $q$. The survivors therefore carry weight $\lambda+\operatorname{wt}(b)$ with inherited raising and surviving lowering operators and the induced $\epsilon/\varphi$; the grand-loop and tensor-product theorems of [F2] identify the resulting crystal with $B(\lambda)$. [step 2.1, step 5.1, F1, F2]

6.2 Recognition once strict positive extractions exist. The canonical extractions have been constructed in steps 2.2–5.1; we now prove the abstract comparison used also by the categorical graph. By the abstract tensor definitions of [F5], let $C,C'$ be the negative crystals in the Statement, with unique weight-zero vacuums and extractions $x\mapsto x'\otimes b_i(-c_i(x))$, so $\mathrm{wt}(x')=\mathrm{wt}(x)+c_i(x)\alpha_i$. First, zero extraction fixes the first factor. Indeed the vacuum maps to $u\otimes b_i(0)$ by nonpositive weights and uniqueness of weight zero. Induct on height and write $x=f_jy$. If the last position of $\Psi_i(x)$ is zero, the tensor lowering rule and nonpositive last positions imply that $\Psi_i(y)$ also has last position zero and $f_j$ acted on its first factor: the second branch, possible only for $j=i$, strictly decreases that last position. By induction its first factor is $y$, so the new first factor is $f_jy=x$. This proves the claim without an extra identity hypothesis on zero extractions. Fix a finite set $I_0$ supporting the weights of two lowering words under comparison and cycle through all its colors $H$ times, where $H$ is their maximum height. Apply each successive extraction to the first factor. Its height never increases; during a whole cycle either it is already the vacuum or at least one extraction is positive: if none is positive the first factor stays fixed and has all its extractions zero, contradicting the nonvacuum hypothesis. Colors outside $I_0$ have zero extraction because the first factor's weight stays in $-Q_{+,I_0}$. Hence after $H$ cycles every vertex of height at most $H$ maps injectively into $\{u\}\otimes B_{i_N}\otimes\cdots\otimes B_{i_1}$. The resulting composite remains strict on the whole crystal, and sends its vacuum to $u\otimes b_{i_N}(0)\otimes\cdots\otimes b_{i_1}(0)$. Consequently the image of a lowering word is computed by applying that same word to this common tensor vacuum, for both $C$ and $C'$. If two words agree in $C$, their tensor images agree, so injectivity forces agreement in $C'$; the reverse follows identically. Matching lowering words therefore defines inverse strict isomorphisms, independent of paths. This finite argument proves recognition conditional on the stated strict positive extraction hypotheses, without using height termination alone as a substitute for path independence. [step 4.1, step 5.1, F5, algebra, construct]

7.1 The categorified graph. For any field and any general homogeneous nondegenerate $Q$ satisfying the hypotheses of the two one-step lemmas of [F3], the shift-orbit simple-module graph is lowering-generated with strict elementary extractions by [F3]; step 6.2 identifies it canonically with $B(\infty)$. In a first-strand cyclotomic quotient the surviving simple graph is exactly the survivor set of step 6.1, hence is $B(\lambda)$; the graph labeled by indecomposable projective covers $P(S)$ is the same graph under the unscaled cover--simple pairing of the cover-descent lemma, since the pairing matches each cover label with its simple head without rescaling. Operators on cover labels are transported from the simple graph; no arbitrary $\#$-dual-of-simple identification and no general global-basis theorem is used. [step 6.1, step 6.2, F3]

8.1 Choice bookkeeping. The argument is a chain of the inherited suppliers [F1] and [F2]; the Axiom of Choice is inherited through the grand-loop crystal-basis and highest-weight projection contracts used for the signed based kernel, positive tensor residues and survivor comparison in steps 2.1–6.1. No additional infinite choice is made in the right-string, finite auxiliary tensor, height and word computations of steps 1.1–5.1 and 7.1. [step 1.1, step 6.1, F1, F2] ∎
