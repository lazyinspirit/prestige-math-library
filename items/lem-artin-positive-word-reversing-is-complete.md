---
id: lem-artin-positive-word-reversing-is-complete
kind: lemma
title: "Artin positive word reversing is complete"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-artin-right-complements-and-word-reversing, def-positive-braid-monoid,
       lem-artin-right-complements-satisfy-the-cube-condition,
       lem-positive-artin-relations-preserve-homogeneous-length,
       thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Chapter II, Lemma 4.6, Proposition 4.16, Definition 4.48, Lemma 4.55, Proposition 4.51, printed pp. 63-68, 78-83"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
    - title: "Patrick Dehornoy et al., Foundations of Garside Theory, Appendix, Lemmas II.4.60-II.4.63, printed pp. 657-662, and Chapter II, Corollaries 4.45 and 4.47, printed pp. 79-80"
      url: "https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$ and let $\Theta$ be the total right complement of
[[def-artin-right-complements-and-word-reversing]], with $\equiv^{+}$ the
congruence of [[def-positive-braid-monoid]] and $\ell$ the length of
[[lem-positive-artin-relations-preserve-homogeneous-length]]. Then, for all
positive words $u,v$:

**(a) Coherence of the recursion.** Wherever the values exist,
$\Theta(u,v_1v_2)=\Theta(u,v_1)\,\Theta(\Theta(v_1,u),v_2)$
for all positive words $u,v_1,v_2$. Consequently $\Theta$ is the unique
minimal extension $\theta^{*}$ of $\theta$ of the source, it satisfies all the
recursion rules of the source, and its values depend only on the pair of words,
so that "the right complement of $v$ over $u$" is a well-defined word whenever it
exists. ($\Theta$ is by construction a *partial* map: $\Theta(u,v)$ is defined
exactly when the reversing of $u^{-1}v$ terminates. For the Artin presentation it
is in fact total, because every pair of positive words admits a common right
multiple; that is noted below and proved in
[[lem-every-positive-braid-divides-a-power-of-delta-on-both-sides]].)

**(b) Complement common multiples.** If $\Theta(u,v)$ is defined then
$u\,\Theta(u,v)\equiv^{+}v\,\Theta(v,u)$; in particular, if
$\Theta(u,v)=\Theta(v,u)=\varepsilon$, then $u\equiv^{+}v$ in $B_n^{+}$.

**(c) Completeness and the equality criterion.** $u\equiv^{+}v$ if and only if
the reversing of $u^{-1}v$ terminates in the empty path, equivalently if and
only if $\Theta(u,v)$ and $\Theta(v,u)$ are defined and both empty. Equivalently,
right-reversing is complete for the Artin presentation.

**(d) Left cancellativity.** If $xu=xv$ in $B_n^{+}$ then $u=v$; that is,
$B_n^{+}$ is left-cancellative.

**(e) Conditional right-lcms.** If $[u]$ and $[v]$ admit a common right
multiple in $B_n^{+}$ (equivalently, if $\Theta(u,v)$ is defined), then
$[u\Theta(u,v)]$ is their least common right
multiple; consequently any two elements of $B_n^{+}$ that admit a common right
multiple admit a unique right-lcm. Moreover $\Theta(u,v)=\varepsilon$ if and
only if $[u]=[v]c$ for some $c\in B_n^{+}$.

For a pair with a common right multiple, the criterion and complement are
effective: the conditional-lcm assertion below guarantees that right-reversing
terminates, and a fixed rule such as reversing the leftmost negative--positive
pair computes its terminal form in finitely many steps. The later explicit
$\Delta$-power construction makes every pair satisfy this hypothesis and thus
turns (c) into an unconditional decision test. No choice principle is used.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, the alphabet $\Sigma_n$, the right complement $\Theta$, the congruence $\equiv^{+}$ and the length $\ell$.

[F1] $\Theta(\varepsilon,v)=v$, $\Theta(u,\varepsilon)=\varepsilon$, $\Theta(su',v)=\Theta(u',\Theta(s,v))$, and $\Theta(s,tv)=\theta(s,t)\Theta(\theta(t,s),v)$, where $\theta(\sigma_i,\sigma_j)$ is $\varepsilon$ for $i=j$, $\sigma_j\sigma_i$ for $|i-j|=1$, and $\sigma_j$ for $|i-j|\ge2$; for letters $s\ne t$, $s\theta(s,t)$ and $t\theta(t,s)$ are the two sides of a defining pair of the presentation, so $[s\theta(s,t)]=[t\theta(t,s)]$ ([[def-artin-right-complements-and-word-reversing]]).

[F2] $\equiv^{+}$ is the smallest congruence on $\Sigma_n^{*}$ containing the braid pairs and the commutation pairs; $B_n^{+}=\Sigma_n^{*}/\!\equiv^{+}$, and $u\equiv^{+}v$ implies $|u|=|v|$ ([[def-positive-braid-monoid]], [[lem-positive-artin-relations-preserve-homogeneous-length]]).

[L3] $\ell\colon B_n^{+}\to\mathbb N$ is a monoid homomorphism, $\ell(x)=0$ only for $x=1$, and $\ell$ takes only the values $0,\dots,k$ on the classes of words of length $k$; a surjection from a finite set onto a set makes the target finite with no more elements ([[lem-positive-artin-relations-preserve-homogeneous-length]]).

[L4] The $\theta$-cube condition holds for every triple of letters: $\Theta_3(x,y,z):=\Theta(\Theta(x,y),\Theta(x,z))$ and $\Theta_3(y,x,z)$ are $\equiv^{+}$-equivalent for all letters $x,y,z$; in the three consecutive cases the values are $\sigma_{i+2}\sigma_{i+1}\sigma_i$, $\sigma_i\sigma_{i+1}\sigma_{i+2}$ and the pair $\sigma_{i+1}\sigma_i\sigma_{i+2}\sigma_{i+1}\equiv^{+}\sigma_{i+1}\sigma_{i+2}\sigma_i\sigma_{i+1}$ ([[lem-artin-right-complements-satisfy-the-cube-condition]]).

[L5] Induction on the natural numbers ([[thm-induction-principle]]); consequently a partial map defined by a recursion whose every recursive call has strictly smaller value of a natural-valued measure is well defined, by induction on that measure.

[L6] A rewriting relation $\to$ is **confluent below** a set $T$ if every two maximal $\to$-sequences starting from a common element either both terminate in the same element of $T$ or both fail to terminate; and a relation containing no infinite sequence has every maximal sequence finite.

[L7] **Right-complemented presentations have well-defined complements** (source's Lemma 4.32, printed pp. 73--74). If a category presentation is right-complemented, associated with the syntactic right complement $\theta$, then: (i) for all paths $u,v$ there exists **at most one** pair of paths $(u',v')$ with $u^{-1}v\rightsquigarrow v'\,(u')^{-1}$; (ii) defining $\theta^{*}(u,v):=v'$ when that pair exists, $\theta^{*}$ is a partial map extending $\theta$, it satisfies the four rules $\theta^{*}(s,s)=\varepsilon$, $\theta^{*}(u_1u_2,v)=\theta^{*}(u_2,\theta^{*}(u_1,v))$, $\theta^{*}(u,v_1v_2)=\theta^{*}(u,v_1)\,\theta^{*}(\theta^{*}(v_1,u),v_2)$, $\theta^{*}(\varepsilon,u)=u$, $\theta^{*}(u,\varepsilon)=\varepsilon$, and it is the least extension of $\theta$ satisfying those rules. The presentation of $B_n^{+}$ by $\Sigma_n$ and $R_n$ is right-complemented, associated with the syntactic right complement $\theta$ of [[def-artin-right-complements-and-word-reversing]]; this is checked letter by letter there (equal letters give the common word $s$, and distinct letters give the unique defining pair of $R_n$ beginning with each). Hence (i) and (ii) apply to the Artin presentation, and the map $\Theta$ of that definition is $\theta^{*}$; in particular the terminal pair of any successful reversing of $u^{-1}v$ is $\Theta(u,v)\,(\Theta(v,u))^{-1}$. [L7]

[L8] **Noetherianity witnesses** (source's Definition II.2.31(ii), Proposition II.2.32, printed pp. 47--48). A right-Noetherianity witness for a presentation $(S,R)$ is a map $\lambda^{*}$ from $S$-paths to ordinals that is invariant under $\equiv^{+}$ and satisfies $\lambda^{*}(w)\le\lambda^{*}(sw)$ for all letters $s$ and words $w$, the inequality being strict whenever the class of $s$ is not invertible in $\langle S\mid R\rangle^{+}$. Every homogeneous presentation admits the $\mathbb N$-valued witness $\lambda^{*}(w):=|w|$: length is $\equiv^{+}$-invariant because relations preserve length [F2], and $|w|<|sw|$ for every letter $s$; strictness is automatic, and it is consistent with [L3], since no letter of $\Sigma_n$ is invertible in $B_n^{+}$. [L3]

[L9] **The $\theta$-cube condition implies the cube condition** (source's Lemma 4.55, printed p. 80). If a presentation is associated with a syntactic right complement $\theta$ and the $\theta$-cube condition is true on a set of paths, then the cube condition (4.49) of the source is true on that set. Together with [L4] this gives the cube condition for every triple of letters. [L4]

[L10] **Reversing implies equivalence** (source's Proposition 4.34 and formula (4.35), printed pp. 74, 90--91). If $u^{-1}v\rightsquigarrow v'\,(u')^{-1}$ for positive words $u,v,u',v'$, then $uv'\equiv^{+}vu'$; in particular $u^{-1}v\rightsquigarrow\varepsilon$ implies $u\equiv^{+}v$. [F2]



## Proof

**Proof technique:** direct.

1.1 **All four recursion rules hold, including the coherence claimed in (a).** The presentation of $B_n^{+}$ is right-complemented with syntactic right complement $\theta$, as verified letter by letter in [[def-artin-right-complements-and-word-reversing]], so [L7](ii) applies to it: the map $\Theta$ of that definition is the least extension $\theta^{*}$ of $\theta$ satisfying the four rules, and by [L7](i) there is at most one pair of blocks to which a pair of positive words can be reversed, so $\Theta$ is well defined where it is defined and the terminal pair of any successful reversing of $u^{-1}v$ is $\Theta(u,v)\,(\Theta(v,u))^{-1}$ — an identification used at the end of the proof. Of the four rules, $\Theta(\varepsilon,v)=v$ and $\Theta(u,\varepsilon)=\varepsilon$ are the two empty-word clauses of [L7](ii), and $\Theta(su',v)=\Theta(u',\Theta(s,v))$ is the first-argument rule of [F1]; the remaining rule, $\Theta(u,v_1v_2)=\Theta(u,v_1)\,\Theta(\Theta(v_1,u),v_2)$, is the second-argument rule and is exactly claim (a). So (a) holds for all positive words $u,v_1,v_2$ and every rule of [F1] may be used below. [F1, L7]

1.2 **Repeated-entry triples.** For all letters $x,y,z$: if $x=y$ the two words $\Theta_3(x,y,z)$ and $\Theta_3(y,x,z)$ are identical; if $x=z$ both are $\varepsilon$; if $y=z$ the first is $\Theta(\Theta(x,y),\Theta(x,y))=\varepsilon$ and the second is $\Theta(\Theta(y,x),\Theta(y,y))=\varepsilon$. This is recorded for later use in the distance induction. [F1, L4]

1.3 **Complement common multiples (b).** Assume $\Theta(u,v)$ is defined. Then by the definition of $\Theta$ and [L7](i), the reversing of $u^{-1}v$ terminates in the pair of blocks $\Theta(u,v)\,(\Theta(v,u))^{-1}$, so $u^{-1}v\rightsquigarrow\Theta(u,v)\,(\Theta(v,u))^{-1}$; [L10] then gives $u\,\Theta(u,v)\equiv^{+}v\,\Theta(v,u)$, which is (b). In particular if both complements are empty, $u\equiv^{+}v$. [L7, L10]

1.4 **The reversing formalism.** A signed path is a finite word with signed letters; right-reversing replaces a negative-positive subpath $s^{-1}t$ by $v u^{-1}$ when $sv=tu$ is a defining relation, and deletes $s^{-1}s$; a step with $s\ne t$ replaces two letters by the $|\theta(s,t)|+|\theta(t,s)|\ge2$ letters of the new blocks, while the step with $s=t$ removes two letters, so along a terminating sequence the length changes by a finite sum of such terms. Equivalence in $B_n^{+}$ is detected by reversing, in the sense of the source's completeness criterion for $\varepsilon$-free presentations: because the presentation contains no $\varepsilon$-relation, reversing is complete if and only if $u\equiv^{+}v$ implies that the path $u^{-1}v$ reverses to the empty path. The combinatorial distance $d(u,v)$ between two $\equiv^{+}$-related paths is the least number of single relation applications transforming one into the other; it is a natural number by the definition of $\equiv^{+}$. [F1, F2, given]


1.5 **Elementary compatibility.** (i) If $s\ne t$ are letters, then $s^{-1}t\rightsquigarrow\theta(s,t)\theta(t,s)^{-1}$ by the defining relation $s\theta(s,t)=t\theta(t,s)$; for $s=t$, $s^{-1}s\rightsquigarrow\varepsilon$. (ii) A reversing step at a subpath remains valid when the same signed context is placed on both sides; thus $x\rightsquigarrow x'$ implies $axb\rightsquigarrow ax'b$, and a second step $y\rightsquigarrow y'$ in a disjoint subpath gives $x'y\rightsquigarrow x'y'$. Finite reversing sequences concatenate. (iii) The positive-word length $\lambda^*(w):=|w|$ satisfies $\lambda^*(w)<\lambda^*(sw)$ for every positive letter $s$, and it is $\equiv^{+}$-invariant because relations preserve length [F2]. Moreover no letter $s$ is invertible in $B_n^{+}$: if $[s]x=1$ for some $x$, then applying the monoid homomorphism $\ell$ to both sides gives $1+\ell(x)=0$ in $\mathbb N$, which is impossible. So the strictness clause of [L8] holds and the length is a right-Noetherianity witness. [F1, F2, L3, L8]

1.6 **Inner induction on the total length.** For natural $\ell'$ let $E_{\alpha,\ell'}$ be $E_\alpha$ restricted to quadruples with $|\hat u|+|\hat v|\le\ell'$. $E_{\alpha,1}$ holds: if $\hat u$ is empty, the choices $a=\varepsilon$, $b=\hat v$, $c=\check u$ witness factorability, and symmetrically for $\hat v$ empty. [L5]

1.7 **The length-two case, third induction on the distance.** Assume $|\hat u|=|\hat v|=1$, so $\hat u,\hat v$ are letters $s,t$. Let $E_{\alpha,2,d}$ be $E_{\alpha,2}$ restricted to quadruples with combinatorial distance $d(\hat u\check v,\hat v\check u)\le d$. $E_{\alpha,2,0}$ holds: then $\hat u=\hat v$ and $\check u\equiv^{+}\check v$, and $a=b=\varepsilon$, $c=\check u$ witness factorability. $E_{\alpha,2,1}$ holds: if the single relation step does not involve the first letter, then $\hat u=\hat v$ and the previous witness applies; otherwise the first letters of the two paths satisfy $\hat u v'= \hat v u'$ for a relation of the presentation, and $a=u'$, $b=v'$, $c$ the common remainder witness factorability. [F1, L4, L5]

2.1 **Empty complements and the equality test (c), forward direction.** If $\Theta(u,v)=\Theta(v,u)=\varepsilon$ and $\Theta$ is defined on the pair, then $u\equiv^{+}v$ by step 1.3. Conversely, if $u\equiv^{+}v$, then $|u|=|v|$ by [F2] and the completeness proved below supplies a reversing of $u^{-1}v$ to the empty path, so that $\Theta(u,v)$ and $\Theta(v,u)$ are defined and empty; this is the equivalence asserted in (c), completed later in the proof. [F2, L6, step 1.3]

2.2 **The Appendix lemma, outer induction.** Let $\lambda^*$ be the length function $\lambda^*(w)=|w|$, which by [L8] and step 1.5(iii) is an $\mathbb N$-valued right-Noetherianity witness for the Artin presentation; let $\alpha\in\mathbb N$ and let $E_\alpha$ be: every quadruple $(\hat u,\hat v,\check u,\check v)$ of paths with $\hat u\check v\equiv^{+}\hat v\check u$ and $\lambda^*(\hat u\check v)\le\alpha$ is reversing-factorable, meaning that there are positive paths $a,b,c$ with $(\hat u)^{-1}\hat v\rightsquigarrow b a^{-1}$, $\check u\equiv^{+}ac$, $\check v\equiv^{+}bc$. Hats and checks are variable labels, not signs; $u^{-1}$ is the signed inverse word (reverse order, negative letters). We prove $E_\alpha$ for every natural $\alpha$ by induction on $\alpha$ using [L5], assuming $E_\beta$ for all $\beta<\alpha$. [F1, L3, L5, L8]

2.3 **The distance induction, main step.** Assume $d\ge2$ and $E_{\alpha,2,d'}$ for $d'<d$, and let $(\hat u,\hat v,\check u,\check v)$ with $\hat u\check v\equiv^{+}\hat v\check u$, $\lambda^*(\hat u\check v)\le\alpha$, $|\hat u|=|\hat v|=1$ and distance $d$. Choose an intermediate path $w\hat w$ of a derivation from $\hat u\check v$ to $\hat v\check u$, with $w$ its first letter; then $\hat u\check v\equiv^{+}w\hat w\equiv^{+}\hat v\check u$, and both distances to $w\hat w$ are $<d$. By $E_{\alpha,2,d-1}$ applied to the quadruples $(\hat u,w,\hat w,\check v)$ and $(w,\hat v,\check u,\hat w)$ — legitimate because $|\hat u|=|w|=1$, $|w|+|\hat v|=2$, and the distances and $\lambda^*$-values are within range — there are paths $u_0,v_0,u_1,v_1,\check u_0,\check v_0$ with $$(\hat u)^{-1}w\rightsquigarrow v_1(u_0)^{-1},\quad \check v\equiv^{+}v_1\check v_0,\quad \hat w\equiv^{+}u_0\check v_0,\qquad w^{-1}\hat v\rightsquigarrow v_0(u_1)^{-1},\quad \check u\equiv^{+}u_1\check u_0,\quad \hat w\equiv^{+}v_0\check u_0 .$$ Hence $u_0\check v_0\equiv^{+}\hat w\equiv^{+}v_0\check u_0$, and $\lambda^*(u_0\check v_0)=\lambda^*(\hat w)<\lambda^*(w\hat w)\le\alpha$ by the strict increase of step 1.5(iii) at the non-invertible letter $w$; so the outer induction hypothesis $E_{\beta}$ at $\beta:=\lambda^*(u_0\check v_0)<\alpha$ applies, giving paths $u_0',v_0',w_0'$ with $$(u_0)^{-1}v_0\rightsquigarrow v_0'(u_0')^{-1},\qquad \check u_0\equiv^{+}u_0'w_0',\qquad \check v_0\equiv^{+}v_0'w_0' .$$ Concatenating the first reversings at their signed boundaries gives $(\hat u)^{-1}w w^{-1}\hat v\rightsquigarrow v_1(u_0)^{-1}v_0(u_1)^{-1}\rightsquigarrow v_1v_0'(u_1u_0')^{-1}$. The middle $ww^{-1}$ is a signed inverse pair, not a positive word relation. Since the $\theta$-cube condition holds for the triple $(\hat u,\hat v,w)$ of letters — [L4] for distinct letters, the repeated-entry cases being the computation in step 1.2 — [L9] yields the cube condition of the source for that triple, so there are paths $u',v',w_1$ with $$(\hat u)^{-1}\hat v\rightsquigarrow v'(u')^{-1},\qquad u_1u_0'\equiv^{+}u'w_1,\qquad v_1v_0'\equiv^{+}v'w_1 .$$ Setting $w'=w_1w_0'$ gives $\check u\equiv^{+}u_1u_0'w_0'\equiv^{+}u'w'$ and $\check v\equiv^{+}v_1v_0'w_0'\equiv^{+}v'w'$, so $(\hat u,\hat v,\check u,\check v)$ is factorable. Hence $E_{\alpha,2,d}$ holds for all $d$, and therefore $E_{\alpha,2}$. [F1, L3, L4, L7, L9, step 1.2, step 1.5, step 1.7]

3.1 **Inner induction on the total length, main step.** Let $\ell'\ge3$ and assume $E_{\alpha,\ell''}$ for $\ell''<\ell'$. Let $(\hat u,\hat v,\check u,\check v)$ satisfy the hypotheses with $|\hat u|+|\hat v|=\ell'$, so one of $\hat u,\hat v$ has length at least two; say $\hat v=v_1v_2$ with both factors nonempty. Then $\hat u\check v\equiv^{+}v_1(v_2\check u)$ with $|\hat u|+|v_1|<\ell'$, so $E_{\alpha,\ell''}$ with $\ell''=|\hat u|+|v_1|$ gives paths $u_1',v_1',w_1'$ with $$(\hat u)^{-1}v_1\rightsquigarrow v_1'(u_1')^{-1},\qquad v_2\check u\equiv^{+}u_1'w_1',\qquad \check v\equiv^{+}v_1'w_1' .$$ Here $\lambda^*(v_2\check u)<\lambda^*(v_1v_2\check u)\le\alpha$ by step 1.5(iii) at the non-invertible letter(s) of $v_1$, so the outer induction hypothesis $E_{\beta}$ at $\beta:=\lambda^*(v_2\check u)<\alpha$ applies to the quadruple $(u_1',v_2,\check u,w_1')$ — legitimate since $u_1'w_1'\equiv^{+}v_2\check u$ — giving paths $u',v_2',w'$ with $$(u_1')^{-1}v_2\rightsquigarrow v_2'(u')^{-1},\qquad \check u\equiv^{+}u'w',\qquad w_1'\equiv^{+}v_2'w' .$$ Setting $v'=v_1'v_2'$ and concatenating reversings gives $(\hat u)^{-1}\hat v=(\hat u)^{-1}v_1v_2\rightsquigarrow v_1'(u_1')^{-1}v_2\rightsquigarrow v_1'v_2'(u')^{-1}=v'(u')^{-1}$ and $\check v\equiv^{+}v_1'w_1'\equiv^{+}v_1'v_2'w'=v'w'$, so the quadruple is factorable. The other case, in which $|\hat u|\ge2$, is not a symmetry shortcut: write $\hat u=u_1u_2$ with both factors nonempty. Apply the inner hypothesis to $(u_1,\hat v,\check u,u_2\check v)$, since $u_1(u_2\check v)\equiv^{+}\hat v\check u$ and $|u_1|+|\hat v|<\ell'$. It gives $(u_1)^{-1}\hat v\rightsquigarrow v_1'(u_1')^{-1}$, $\check u\equiv^{+}u_1'w_1'$ and $u_2\check v\equiv^{+}v_1'w_1'$. Since $|u_2\check v|=|\hat u\check v|-|u_1|<\alpha$, the outer hypothesis applies to $(u_2,v_1',w_1',\check v)$ and gives $(u_2)^{-1}v_1'\rightsquigarrow v_2'(u_2')^{-1}$, $w_1'\equiv^{+}u_2'w'$ and $\check v\equiv^{+}v_2'w'$. Thus $(\hat u)^{-1}\hat v=(u_2)^{-1}(u_1)^{-1}\hat v\rightsquigarrow (u_2)^{-1}v_1'(u_1')^{-1}\rightsquigarrow v_2'(u_2')^{-1}(u_1')^{-1}=v_2'(u_1'u_2')^{-1}$, while $\check u\equiv^{+}u_1'u_2'w'$ and $\check v\equiv^{+}v_2'w'$. So this quadruple is factorable too, and $E_{\alpha,\ell'}$ holds. [L3, L5, L8, step 1.5, step 2.2]

4.1 **The Appendix lemma.** Steps 2.2, 1.6, 1.7, 2.3 and 3.1 prove $E_{\alpha,\ell'}$ for all $\alpha,\ell'$ by the outer induction on $\alpha$, the inner induction on $\ell'$, and the third induction on derivation distance. Hence every quadruple $(\hat u,\hat v,\check u,\check v)$ with $\hat u\check v\equiv^{+}\hat v\check u$ is reversing-factorable: right-reversing is complete for the Artin presentation, which is the completeness proposition of the source in the homogeneous, $\varepsilon$-free case. [step 2.2, step 1.6, step 1.7, step 2.3, step 3.1]

5.1 **The left-cancellativity consequence.** Since the presentation contains no relation $su=sv$ — both sides of every defining pair begin with different letters when the two sides are distinct, and the equal-letter case is trivial — the source's left-cancellativity corollary applies: $B_n^{+}$ is left-cancellative. Indeed, if $su\equiv^{+}sv$ for a letter $s$, completeness gives a factorization of $(s,s,u,v)$, and by right-complementedness the signed pair $s^{-1}s$ deletes, so $u\equiv^{+}v$; iterating, $xu=xv$ implies $u=v$ for every $x$ by the universal property of $\equiv^{+}$ and induction on the length of a representative of $x$. This is (d). [F1, F2, step 4.1, L5]

5.2 **The conditional-lcm corollary.** For all paths $u,v$: the elements $[u],[v]$ admit a common right multiple if and only if $u^{-1}v$ reverses to some terminal pair $v'\,(u')^{-1}$, and then $[uv']$ is their right-lcm. Indeed, if $h$ is a common right multiple, completeness factorizes $(u,v,\check u,\check v)$ with $u\check v\equiv^{+}v\check u$, giving $u^{-1}v\to v'\,(u')^{-1}$ and $[h]$ a right multiple of $[uv']$; conversely a reversing $u^{-1}v\to v'\,(u')^{-1}$ gives $uv'\equiv^{+}vu'$ and hence a common right multiple. Leastness holds because in a right-complemented presentation the terminal pair is unique when it exists: the maximal right-reversing diagram from a given initial path is unique, as recorded in [L7](i), so the pair $(v',u')$ — and hence the element $[uv']$ — does not depend on the order in which the steps are enumerated. [F1, L7, step 4.1]

6.1 **The complements compute the reversing, and (a),(c),(e) follow.** By step 1.1 the recursion of [F1] is the square-filling computation, so the terminal pair of the reversing of $u^{-1}v$ is $\Theta(u,v)\,(\Theta(v,u))^{-1}$ (the well-definedness lemma [L7]); this identification is the bridge used in the following three consequences. First, (c): if $u\equiv^{+}v$ then by [L6] and the completeness criterion recalled in step 1.4 the path $u^{-1}v$ reverses to the empty path, so $\Theta(u,v)$ and $\Theta(v,u)$ are defined and both $\varepsilon$; conversely step 2.1 gives $u\equiv^{+}v$ from empty complements. Second, (e): if $[u],[v]$ admit a common right multiple then by step 5.2 the pair $u^{-1}v$ reverses to a terminal pair $v'\,(u')^{-1}$ with $[uv']$ the right-lcm, and by the identification $v'=\Theta(u,v)$, giving $[u\Theta(u,v)]$ as the right-lcm; and $\Theta(u,v)=\varepsilon$ holds exactly when $[u]=[v]\Theta(v,u)$, which together with step 2.1 and the additivity of $\ell$ shows the second assertion of (e). Third, (a) and (b) are steps 1.1 and 1.3. [F1, L3, L6, L7, step 1.1, step 1.3, step 2.1, step 5.1, step 5.2]

7.1 **End.** Parts (a),(b),(c),(d),(e) are steps 1.1 and 1.3 (with step 6.1 for the forward direction of (c)), step 2.1 with step 6.1, step 5.1 and step 6.1. The effective operation here is conditional: if a common right multiple exists, step 5.2 proves that the deterministic leftmost reversing procedure terminates and computes $\Theta$. In this Artin presentation, the later explicit common-$\Delta$-power construction supplies that hypothesis for every pair, making the procedure total. No bound by the total input-word length is asserted; no step uses a choice principle. ∎ [step 1.3, step 2.1, step 5.1, step 6.1]

## Remarks

- **Source dependence.** Three facts are taken from the source, with their hypotheses verified, and are recorded in Facts & Assumptions: the well-definedness of the complements and the coherence of the two evaluation orders ([L7], the source's Lemma 4.32, established there by the square-filling grid argument); the right-Noetherianity witness supplied by homogeneity ([L8], the source's Definition II.2.31(ii) and Proposition II.2.32, whose hypothesis "every relation preserves length" is [F2]); and the $\theta$-cube/cube link ([L9], the source's Lemma 4.55). Everything else is re-derived here: the $\theta$-cube condition itself ([[lem-artin-right-complements-satisfy-the-cube-condition]]), the whole nested induction of Appendix Lemma II.4.62 (steps 4.1--6.1), the left-cancellativity deduction (Corollary 4.45) and the conditional-lcm deduction (Corollary 4.47). The specific complements used on this page and on the companion examples page are recomputed from the recursion in [[def-artin-right-complements-and-word-reversing]] and in the items below.
- The hypothesis "right-Noetherian" is met by the length function $\lambda^*(w)=|w|$ because the presentation is homogeneous, and no $\varepsilon$-relation occurs, so the source's case (4.53) of Proposition 4.51 is the one used. The sharp cube condition, which the source records as failing for $n\ge4$, is never used.
- The completeness argument is the only place on this page where the reversing machinery is needed at full strength: everything else (atom complements, $\Delta$-divisibility, the normal form) is a finite computation with the recursion and with the criterion of (c).
- **Source numbering used above.** The descriptive names in the proof correspond
  to the source as follows: "the Appendix lemma" is Lemma II.4.62 of the
  Appendix (with its inner sub-lemmas II.4.60--II.4.63); "the completeness
  proposition in the homogeneous, $\varepsilon$-free case" is Proposition 4.51
  in case (4.53); "the left-cancellativity corollary" is Corollary 4.45; "the
  conditional-lcm corollary" is Corollary 4.47; "the completeness criterion for
  $\varepsilon$-free presentations" is Lemma 4.42; and "the well-definedness
  lemma" is Lemma 4.32. The numbers are kept out of the numbered steps on
  purpose, so that a source numbering such as 4.62 cannot be mistaken for a
  proof step of this item.
