# Braid Groups diagram supplement — lane 02

Reviewed the bound snapshot for `def-endpoint-monodromy-of-a-configuration-loop` and all three listed local PNG screenshots at original resolution (1200×1400, 1200×1400, and 1200×876). The frozen source hash matches the bound current source hash. Review was local-only.

## Assessment

A schematic would be a useful supplement because the definition carries several related conventions: the lift begins at (q), its endpoint is (sigma_\alpha\cdot q), and reading that endpoint tuple by position gives (e_\alpha=\sigma_\alpha^{-1}). The current source spells these out, so the absence of artwork alone is not a defect.

The conventions check out. With the source’s left coordinate action

\[
(\sigma\cdot q)_i=q_{\sigma^{-1}(i)}
\]

(using its 1-based translation of labels), the unique endpoint action element is \(\sigma_\alpha\), while the point originally carrying label \(e_\alpha(i)\) stands at endpoint position \(i\); hence \(e_\alpha=\sigma_\alpha^{-1}\). The published right monodromy action gives \(q\cdot[\alpha]=\pi([\alpha])\cdot q\), and the corresponding left-action element is \([\alpha]\cdot q=\pi([\alpha])^{-1}\cdot q\).

For the stated first-then-second product, the lifted second path is transported by the deck action \(\sigma_\alpha\), so

\[
\pi([\alpha][\beta])=\sigma_{\alpha\beta}=\sigma_\alpha\sigma_\beta.
\]

Thus \(\pi:B_n^{\mathrm{conf}}\to S_n\) is a homomorphism. Taking inverses reverses the order, giving \(e_{\alpha\beta}=e_\beta\circ e_\alpha\), so the label-reading map is an antihomomorphism. No endpoint-lift, label-permutation, right-action, or homomorphism-direction defect was found.

## Diagram guidance

Show the loop \(\alpha\) at \([q]\), its unique lift from \(q\), and the endpoint \(\sigma_\alpha\cdot q\). Mark the endpoint tuple by original labels to make the inverse relation visible. An inset can state the first-then-second product formulas for \(\sigma\) and \(e\). If using a concrete permutation to make inversion visible, use a 3-cycle rather than a transposition. The source does not specify a particular braid representative, crossing signs, or generator word, so the diagram should make no such claim.

The primary receipt reports zero TikZ diagrams and zero diagram failures.
