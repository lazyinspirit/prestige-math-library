# Numerical Serre rank-one proposal and Joseph retrieval record

Authored by `/root/math81_hall_wall/yoneda_nilpotent_chain` on 2026-10-18. All outputs are isolated in this directory. No canonical item, readiness, native state, verification stamp, gate, index, or commit was changed.

## Completed mathematical supplier

`lem-numerical-serre-rank-one-skew-kernel-is-integrable.md` gives a full direct proof from the finite symmetric numerical quantum Serre presentation at a real parameter q>1, hence at ν=√(p^f). It does not assume a presentation comparison, a pairing radical theorem, a triangular decomposition, or a Casimir operator.

The derivative convention is D(xy)=D(x)y+q^{m(x)}xD(y) and D′(xy)=q^{m(y)}D′(x)y+xD′(y), with both taking e_i to 1 and all other generators to 0. The proof verifies descent on every Serre generator, checks DD′=D′D, and defines on B_i=ker D the rank-one operators Rb=e_i b−q^{-m(b)}b e_i, F=−D′/(q−q^{-1}), and Kb=q^{m(b)}b. These obey the stated U_q(sl₂) relations and the product rules for ΔR=R⊗1+K^{-1}⊗R, ΔF=F⊗K+1⊗F.

For N=−a_ij, the explicit root string is

R^r(e_j)=Σ_{s=0}^r (−1)^s q^{−s(a_ij+r−1)} [r choose s]_q e_i^{r−s}e_j e_i^s.

The numerical Serre relation says precisely R^{N+1}(e_j)=0, and F(R^r e_j)=[r]_q[N−r+1]_qR^{r−1}e_j. Normal ordering b e_i=q^{m(b)}e_i b−q^{m(b)}Rb proves spanning by e_i^n times the subalgebra of finite root strings. Iterated D proves directness and identifies that subalgebra with ker D. Tensor-product product formulas prove local finiteness and integrability, with no complete-reducibility theorem.

If a nonzero homogeneous z is killed by both D,D′, then Fz=0. Let n be maximal with R^n z≠0; the exact lowering formula gives [n+1]_q[m(z)+n]_qR^n z=0 and hence m(z)=−n≤0. Thus if z is killed by both derivatives for every i and β=Σ b_iα_i with b_i≥0, the desired downstream conclusion is β²=Σ_i b_i m_i(β)≤0. The other agent retains the separate Casimir/relation-module argument which must supply the contradictory β²>0; this file does not claim that remaining argument complete.

Final focused reports: `rank-one-precheck.json` has one checked proof and zero failures; `rank-one-rendercheck.json` has one file and no errors/warnings; `rank-one-layout.txt` has eight steps and zero defects. Checks used the exact explicit helper path with `tools/tsx-run.mjs tools/precheck.mts`, `tools/rendercheck.mjs`, and `tools/proof-layout.mjs`. No check stamp was added to the helper. An initial multiline step caused a precheck-proposed reordering; the complete mathematical step was restored as one paragraph, its labels and references corrected, and all checks rerun on the final file.

## Joseph source retrieval: not completed

`retrievals.json` records thirteen actual public requests with URLs, timestamps, exact response hashes, content types, statuses, and retained response paths. The retrieval script is `retrieve.py`. No full Joseph PDF or full relevant section was obtained.

- The DOI metadata confirms Anthony Joseph, *Quantum Groups and Their Primitive Ideals*, Springer 1995, electronic ISBN 9783642784002, DOI 10.1007/978-3-642-78400-2.
- The public author homepages mention the book but do not link a downloadable full copy. Their actual HTML is retained.
- The official Springer full-PDF URL returned HTTP 200 with a 3,038-byte HTML client challenge, not PDF data. The response is retained as HTML and explicitly marked `is_pdf:false`.
- Edinburgh's public book and paper indexes were inspected and had no matching book link. Their HTML is retained.
- The official publisher-authorized Google Books volume is `keHnCAAAQBAJ`. Public search-within-volume results locate §3.2.9 around pp75–76 and Proposition 4.1.17 at pp105–106. Those are only short search snippets. The page APIs for all four relevant pages returned metadata with flag 8 and no page-image source; the reader page likewise supplied no image for p105. All actual responses are retained. A page's appearance in the volume's metadata does not demonstrate access to its text.
- The snippet on p129 says Joseph reconstructed the 4.1.17 proof after Kac 9.11, following Rosso, and notes a defect in Kac Remark 9.3. The remainder of that note was not retrieved. Neither that snippet nor the theorem snippet is used as proof evidence.
- General search initially returned publisher/citation results; Google returned an enable-JavaScript page, DuckDuckGo a CAPTCHA, and Brave eventually a CAPTCHA/rate-limit response. No CAPTCHA or subscription control was bypassed. These searches supplied no authoritative full proof.

The helper's source references are bibliographic context. This worker makes no claim to have read the full Joseph §§3.2.9/4.1.17, or the full cited Lusztig sections. The helper is independently proved from its explicit numerical presentation; its validity does not depend on those unread references. No generic-to-specialized conclusion is inferred from a citation or snippet.
